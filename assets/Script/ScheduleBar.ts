// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Schedule from "./Schedule";

export const RESOLUTION: number = 15;

const PLACEHOLDER = new cc.Node();

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScheduleBar extends cc.Component {
    @property({
        type: Schedule,
    })
    scheduleChart: Schedule = null;

    // Stores the occupied information
    @property([cc.Node])
    cells:cc.Node[] = [];

    @property(cc.Node)
    game: cc.Node = null;

    currentCellIndex = -1;

    _checkFreeSpace(xlocation: number, duration: number) {
        let targetCellIndex = Math.floor(xlocation / (this.node.width / this.cells.length));

        for (let i = targetCellIndex; i < targetCellIndex + duration; i++) {
            if (this.cells[i] != null || i >= this.cells.length) {
                return -1;
            }
        }

        return targetCellIndex;
    }

    // Duration here is resoluted
    _markOccupied(targetCellIndex, durationInCells, taskNode) {
        for (let i = targetCellIndex; i < targetCellIndex + durationInCells; i++) {
            this.cells[i] = taskNode;
        }
        return this.cells;
    }

    markFree(taskNode: cc.Node) {
        let startIndex = this.cells.findIndex(
            (node) => node 
            && node.getComponent("TaskItem") 
            && node.getComponent("TaskItem").id === taskNode.getComponent("TaskItem").id
                       , this);
        let taskDuration = taskNode.getComponent("TaskItem").getTaskDuration();
        if (startIndex == -1 || taskDuration == -1) {
            return -1;
        } else {
            for (let i = startIndex; i < startIndex + taskDuration/RESOLUTION; i++) {
                this.cells[i] = null;
            }
            return taskDuration;
        }
    }

    _durationToPixel(duration: number) {
        return Math.floor(this.node.width * duration / this.scheduleChart.duration);
    }

    // If the given duration can be fitted into the closest grid location,
    // return the closest fitted location, otherwise return null
    validate(location: cc.Vec2, taskNode: cc.Node) : cc.Vec2 {
        let duration = taskNode.getComponent("TaskItem").getTaskDuration() / RESOLUTION;
        let freeIndex =  this._checkFreeSpace(location.x, duration);
        if (freeIndex >= 0) {
            console.log("freeIndex in Validate(): " + freeIndex);
            this._markOccupied(freeIndex, duration, taskNode)
            return cc.v2(freeIndex * this.node.width / this.cells.length, this.node.y);
        } else {
            return null;
        }
    }

    // Returns the position of the inserted TaskItem
    insertFixedTask(fixedTime: number, duration: number, taskNode: cc.Node) : cc.Vec2 {
        let freeIndex = Math.floor(fixedTime/RESOLUTION);
        this._markOccupied(freeIndex, duration/RESOLUTION, taskNode);
        return cc.v2(freeIndex * this.node.width / this.cells.length, this.node.y);
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.currentCellIndex = -1;
        while (this.cells.length < this.scheduleChart.duration / RESOLUTION) {
            this.cells.push(null);
        }
    }

    start () {
    }

    update (dt) {
        let timerValue = this.game.getComponent("Game").timer;
        let newCellIndex = Math.floor(timerValue / RESOLUTION);

        if (newCellIndex !== this.currentCellIndex) {
            this.currentCellIndex = newCellIndex;
            console.log(newCellIndex);
            if (this.cells[newCellIndex] && this.cells[newCellIndex].getComponent("TaskItem").used == false) {
                this.game.getComponent("Game").addMoodValue(this.cells[newCellIndex].getComponent("TaskItem").task.moodEffect);
                this.cells[newCellIndex].getComponent("TaskItem").used = true;
                this.cells[newCellIndex].getComponent("TaskItem").canMove = false;
            } else {
                this.cells[newCellIndex] = PLACEHOLDER;
            }
        }
        this.node.parent.getChildByName("TimeMask").width = timerValue/this.scheduleChart.duration * this.node.width;
    }
}
