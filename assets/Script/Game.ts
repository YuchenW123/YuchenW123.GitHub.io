// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import Schedule from './Schedule';
import { RESOLUTION } from './ScheduleBar';
import Task from './Task';


const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    @property(
        {type: cc.Prefab}
    )
    positiveTaskItemPrefab: cc.Prefab = null;

    @property(
        {type: cc.Prefab}
    )
    mutualTaskItemPrefab: cc.Prefab = null;

    @property(
        {type: cc.Prefab}
    )
    negativeTaskItemPrefab: cc.Prefab = null;

    @property(cc.Node)
    clock: cc.Node = null;

    @property(cc.Node)
    scheduleBarArea: cc.Node = null;

    @property(cc.Node)
    taskItemArea: cc.Node = null;

    @property(cc.Node)
    moodBar: cc.Node = null;

    @property(cc.Node)
    gameOverNode = null;

    @property
    timeSpeed = 1;

    @property
    timer = 0;

    @property
    moodValue = 0;

    scheduleChart: Schedule = {
        duration: 360,
        moodLimit: 50,
        startMood: 0,
        startTime: 660,
        timeSpeed: 1,
    }

    taskNodes: cc.Node[] = [];

    tasks: Task[] = [
        {
            text: "洗脸",
            moodEffect: -10,
            triggerFailureString: "怎么灰头土脸见人啊！",
            duration: 60,
            fixedTime: -1,
        },
        {
            text: "化妆",
            moodEffect: -25,
            triggerFailureString: "不化妆绝对不会出门的！",
            duration: 60,
            fixedTime: -1,
        },
        {
            text: "起床",
            moodEffect: -25,
            duration: 45,
            fixedTime: 0,
        },
        {
            text: "拉屎",
            moodEffect: 25,
            duration: 45,
            fixedTime: -1,
        },
        {
            text: "赖床",
            moodEffect: +50,
            duration: 45,
            fixedTime: -1,
        },
        {
            text: "挑穿衣服",
            moodEffect: -50,
            duration: 45,
            fixedTime: -1,
            triggerFailureString:"穿衣服穿太久了!",
        },
        {
            text: "磨蹭",
            moodEffect: 0,
            duration: 45,
            fixedTime: 150,
        }
    ]

    setTimeSpeed(newValue: number) {
        this.timeSpeed = newValue;
    }

    setTimer(newValue:number) {
        this.timer = newValue
    }

    setMoodValue(newValue: number) {
        this.moodValue = newValue;
        this.moodBar.getComponent("MoodBar").setTargetMoodValue(newValue);
    }

    addMoodValue(newValue: number) {
        this.moodValue += newValue;
        this.moodBar.getComponent("MoodBar").setTargetMoodValue(this.moodValue);
    }

    _spawnNewTaskItem(task: Task) {
        let randomeId = "00" + Math.random();
        let newTaskItem: cc.Node = null;

        if (task.moodEffect > 0) {
            newTaskItem = cc.instantiate(this.negativeTaskItemPrefab);
        } else if (task.moodEffect == 0) {
            newTaskItem = cc.instantiate(this.mutualTaskItemPrefab);
        } else {
            newTaskItem = cc.instantiate(this.positiveTaskItemPrefab);
        }

        newTaskItem.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;

        newTaskItem.getComponent("TaskItem").task = task;
        newTaskItem.getComponent("TaskItem").id = randomeId;
        // newTaskItem.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;

        newTaskItem.width = Math.floor(this.scheduleBarArea.getChildByName("ScheduleBar").width * task.duration / this.scheduleChart.duration * 0.9);
        newTaskItem.height = this.scheduleBarArea.getChildByName("ScheduleBar").height*0.9;
        newTaskItem.getComponent("TaskItem").scheduleBar = this.scheduleBarArea.getChildByName("ScheduleBar");
        newTaskItem.getComponent("TaskItem").taskItemAreaLayout = this.taskItemArea;
        
        if (task.fixedTime >= 0) {
            // Add to scheduleBar
            newTaskItem.getComponent("TaskItem").canMove = false;
            this.scheduleBarArea.getComponentInChildren("ScheduleBar").node.addChild(newTaskItem);
            newTaskItem.position = this.scheduleBarArea.getComponentInChildren("ScheduleBar").insertFixedTask(task.fixedTime, task.duration, newTaskItem);
        } else {
            // Add to task item area
            this.taskItemArea.addChild(newTaskItem);
            this.taskItemArea.getComponent("TaskItemAreaLayout").rearrange();
        }
        return newTaskItem;
    }

    gameOver() {
        // Enable fail window and display sudden death message
        this.node.getChildByName("GameOverScreen").active = true;
    }

    perfectWin() {
        // Enable win window and display perfect message
        this.win();
    }

    win() {
        // Enable win window and display win message
        this.node.getChildByName("WinScreen").active = true;
    }

    lose(failString: string) {
        // Enable lose window and display message from canditates
        this.node.getChildByName("LoseScreen").getChildByName("label").getComponent(cc.Label).string = failString;
        this.node.getChildByName("LoseScreen").active = true;
    }

    gameResult() {
        this.timeSpeed = 0;

        for (let item of this.taskNodes) {
            if (item.getComponent("TaskItem").used == false && item.getComponent("TaskItem").task.moodEffect < 0) {
                let failString = item.getComponent("TaskItem").task.triggerFailureString;
                this.lose(failString);
                return;
            }
        }
        if (this.moodValue >= 0) {
            this.perfectWin();
        } else {
            this.win();
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.getChildByName("WinScreen").active = false;
        this.scheduleBarArea.x = -this.node.width*0.48
        this.scheduleBarArea.width = this.node.width * 0.96;
        this.scheduleBarArea.getChildByName("ScheduleBar").getComponent("ScheduleBar").scheduleChart = this.scheduleChart;
        this.scheduleBarArea.getChildByName("ScheduleBar").width = this.node.width * 0.96;
        this.scheduleBarArea.getChildByName("ScheduleBar").getComponent("ScheduleBar").cells = new Array(this.scheduleChart.duration/RESOLUTION).fill(null);
        this.moodBar.width = this.node.width * 0.96;
        this.taskItemArea.width = this.node.width * 0.96;
        this.clock.x = -this.node.width*0.48;

        this.setTimeSpeed(this.scheduleChart.timeSpeed);

        for (let item of this.tasks) {
           this.taskNodes.push(this._spawnNewTaskItem(item));
        }

        this.moodBar.getComponent("MoodBar").setMoodLimit(this.scheduleChart.moodLimit);
        this.moodBar.getComponent("MoodBar").setCurrentMoodValue(this.scheduleChart.startMood);
        this.moodValue = this.scheduleChart.startMood;
    }

    start () {
        this.setTimer(0);
    }

    update (dt) {
        this.timer += this.timeSpeed * dt;
        this.clock.getComponent(cc.Label).string = intToTime(this.timer + this.scheduleChart.startTime);
        this.moodBar.getComponent("MoodBar").setTargetMoodValue(this.moodValue);
        if (this.timer >= this.scheduleChart.duration) {
            this.gameResult();
        }
    }
}

function intToTime(timer: number) {
    let hours = Math.floor(timer / 60);
    let minutes = Math.floor(timer % 60);
    return (hours < 10 ? ("0" + hours) : ""+hours) + ":" +(minutes < 10?("0"+minutes) : ""+ minutes);
}
