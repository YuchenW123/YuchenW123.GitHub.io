// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import Task from "./Task";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TaskItem extends cc.Component {
    @property(cc.String)
    id = 'testid'

    // On spawn the task Item should spawn label for itself.
    @property(cc.Prefab)
    labelTemplate = null;

    @property({
        type: Task,
    })
    task: Task = null;

    // TODO: remember to add scheduleBar & taskItemAreaLayout when spawning tasks
    @property(cc.Node)
    scheduleBar: cc.Node = null;

    @property(cc.Node)
    taskItemAreaLayout: cc.Node = null;

    @property(cc.Boolean)
    canMove = true;

    @property(cc.Boolean)
    used = false;

    _oldPosition:cc.Vec3 = null;

    target: cc.Node = null;

    scheduleBarRect: cc.Rect = null;
    taskItemAreaRect: cc.Rect = null;

    getTaskDuration() {
        if (this.task) {
            return this.task.duration;
        } else {
            return -1;
        }
    }

    _spawnLabel() {
        let newLabel = cc.instantiate(this.labelTemplate);
        newLabel.width = this.node.width * 0.95;
        newLabel.getComponent(cc.Label).string = this.task.text;
        this.node.addChild(newLabel);
    }

    _onTouchMove(touchEvent) {
        if (this.canMove) {
            // Whenever moving, remove it from schedule bar
            if (this.node.parent === this.scheduleBar) {
                this.node.parent = this.taskItemAreaLayout;
                this.scheduleBar.getComponent("ScheduleBar").markFree(this.node);
            }

            this.node.scale = 1.1;
        
            let location = touchEvent.getLocation();
            this.node.position = this.node.parent.convertToNodeSpaceAR(location);
        }
    }
    
    _onTouchEnd(touchEvent) {
        if (this.canMove) {
            this.node.scale = 1;

            this.taskItemAreaRect = this.taskItemAreaLayout.getBoundingBox();
            this.scheduleBarRect = this.scheduleBar.getBoundingBox();

            // get world location from touch event
            let location = touchEvent.getLocation();

            // Get target location relative to target's parent to compare to rectangle container
            // let locationTaskItemAreaAR: cc.Vec3 = this.taskItemAreaLayout.parent.convertToNodeSpaceAR(location);
            let locationScheduleBarAR: cc.Vec3 = this.scheduleBar.parent.convertToNodeSpaceAR(location);
            
            // If the point lands within schedulebar area, check the scheduleBar.validate() method for validated loacation
            if (this.scheduleBarRect.contains(cc.v2(locationScheduleBarAR.x, locationScheduleBarAR.y))){
                // Translate the location to scheduleBar relative
                let locationWithinScheduleBarAR = this.scheduleBar.convertToNodeSpaceAR(location);

                // Get relative location
                let validatedPosition = this.scheduleBar.getComponent("ScheduleBar").validate(locationWithinScheduleBarAR, this.node);
                if (validatedPosition != null) {
                    this.node.parent = this.scheduleBar;
                    this.node.position = validatedPosition;

                    // Rearrange TaskItemAreaLayout
                    this.taskItemAreaLayout.getComponent("TaskItemAreaLayout").rearrange();
                    // Move to schedule bar successful
                    return;
                }
            } 
            // If not moved to scheduleBar, then reset back to taskItemAreaLayout
            this.node.parent = this.taskItemAreaLayout;

            // Call update on layout
            this.taskItemAreaLayout.getComponent("TaskItemAreaLayout").rearrange();

            return;            
        }
        else {
            return;
        }
    }

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        if (!this.task) {
            throw ("None task found for onLoad()!")
        }
        // Spawn label
        this._spawnLabel();

        // save original position
        this._oldPosition = this.node.position;
      
        this.node.on(cc.Node.EventType.TOUCH_START, ()=>{this._oldPosition = this.node.position;}, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, ()=>{this._oldPosition = this.node.position;}, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    start () {
        
    }

    update (dt) {
    }
}
