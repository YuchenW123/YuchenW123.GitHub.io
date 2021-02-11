"use strict";
cc._RF.push(module, '7622el0GttIdZdtTe6Pq2SQ', 'Game');
// Script/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ScheduleBar_1 = require("./ScheduleBar");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positiveTaskItemPrefab = null;
        _this.mutualTaskItemPrefab = null;
        _this.negativeTaskItemPrefab = null;
        _this.clock = null;
        _this.scheduleBarArea = null;
        _this.taskItemArea = null;
        _this.moodBar = null;
        _this.gameOverNode = null;
        _this.timeSpeed = 1;
        _this.timer = 0;
        _this.moodValue = 0;
        _this.scheduleChart = {
            duration: 360,
            moodLimit: 50,
            startMood: 0,
            startTime: 660,
            timeSpeed: 1,
        };
        _this.taskNodes = [];
        _this.tasks = [
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
                triggerFailureString: "穿衣服穿太久了!",
            },
            {
                text: "磨蹭",
                moodEffect: 0,
                duration: 45,
                fixedTime: 150,
            }
        ];
        return _this;
    }
    Game.prototype.setTimeSpeed = function (newValue) {
        this.timeSpeed = newValue;
    };
    Game.prototype.setTimer = function (newValue) {
        this.timer = newValue;
    };
    Game.prototype.setMoodValue = function (newValue) {
        this.moodValue = newValue;
        this.moodBar.getComponent("MoodBar").setTargetMoodValue(newValue);
    };
    Game.prototype.addMoodValue = function (newValue) {
        this.moodValue += newValue;
        this.moodBar.getComponent("MoodBar").setTargetMoodValue(this.moodValue);
    };
    Game.prototype._spawnNewTaskItem = function (task) {
        var randomeId = "00" + Math.random();
        var newTaskItem = null;
        if (task.moodEffect > 0) {
            newTaskItem = cc.instantiate(this.negativeTaskItemPrefab);
        }
        else if (task.moodEffect == 0) {
            newTaskItem = cc.instantiate(this.mutualTaskItemPrefab);
        }
        else {
            newTaskItem = cc.instantiate(this.positiveTaskItemPrefab);
        }
        newTaskItem.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
        newTaskItem.getComponent("TaskItem").task = task;
        newTaskItem.getComponent("TaskItem").id = randomeId;
        // newTaskItem.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
        newTaskItem.width = Math.floor(this.scheduleBarArea.getChildByName("ScheduleBar").width * task.duration / this.scheduleChart.duration * 0.9);
        newTaskItem.height = this.scheduleBarArea.getChildByName("ScheduleBar").height * 0.9;
        newTaskItem.getComponent("TaskItem").scheduleBar = this.scheduleBarArea.getChildByName("ScheduleBar");
        newTaskItem.getComponent("TaskItem").taskItemAreaLayout = this.taskItemArea;
        if (task.fixedTime >= 0) {
            // Add to scheduleBar
            newTaskItem.getComponent("TaskItem").canMove = false;
            this.scheduleBarArea.getComponentInChildren("ScheduleBar").node.addChild(newTaskItem);
            newTaskItem.position = this.scheduleBarArea.getComponentInChildren("ScheduleBar").insertFixedTask(task.fixedTime, task.duration, newTaskItem);
        }
        else {
            // Add to task item area
            this.taskItemArea.addChild(newTaskItem);
            this.taskItemArea.getComponent("TaskItemAreaLayout").rearrange();
        }
        return newTaskItem;
    };
    Game.prototype.gameOver = function () {
        // Enable fail window and display sudden death message
        this.node.getChildByName("GameOverScreen").active = true;
    };
    Game.prototype.perfectWin = function () {
        // Enable win window and display perfect message
        this.win();
    };
    Game.prototype.win = function () {
        // Enable win window and display win message
        this.node.getChildByName("WinScreen").active = true;
    };
    Game.prototype.lose = function (failString) {
        // Enable lose window and display message from canditates
        this.node.getChildByName("LoseScreen").getChildByName("label").getComponent(cc.Label).string = failString;
        this.node.getChildByName("LoseScreen").active = true;
    };
    Game.prototype.gameResult = function () {
        this.timeSpeed = 0;
        for (var _i = 0, _a = this.taskNodes; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.getComponent("TaskItem").used == false && item.getComponent("TaskItem").task.moodEffect < 0) {
                var failString = item.getComponent("TaskItem").task.triggerFailureString;
                this.lose(failString);
                return;
            }
        }
        if (this.moodValue >= 0) {
            this.perfectWin();
        }
        else {
            this.win();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        this.node.getChildByName("WinScreen").active = false;
        this.scheduleBarArea.x = -this.node.width * 0.48;
        this.scheduleBarArea.width = this.node.width * 0.96;
        this.scheduleBarArea.getChildByName("ScheduleBar").getComponent("ScheduleBar").scheduleChart = this.scheduleChart;
        this.scheduleBarArea.getChildByName("ScheduleBar").width = this.node.width * 0.96;
        this.scheduleBarArea.getChildByName("ScheduleBar").getComponent("ScheduleBar").cells = new Array(this.scheduleChart.duration / ScheduleBar_1.RESOLUTION).fill(null);
        this.moodBar.width = this.node.width * 0.96;
        this.taskItemArea.width = this.node.width * 0.96;
        this.clock.x = -this.node.width * 0.48;
        this.setTimeSpeed(this.scheduleChart.timeSpeed);
        for (var _i = 0, _a = this.tasks; _i < _a.length; _i++) {
            var item = _a[_i];
            this.taskNodes.push(this._spawnNewTaskItem(item));
        }
        this.moodBar.getComponent("MoodBar").setMoodLimit(this.scheduleChart.moodLimit);
        this.moodBar.getComponent("MoodBar").setCurrentMoodValue(this.scheduleChart.startMood);
        this.moodValue = this.scheduleChart.startMood;
    };
    Game.prototype.start = function () {
        this.setTimer(0);
    };
    Game.prototype.update = function (dt) {
        this.timer += this.timeSpeed * dt;
        this.clock.getComponent(cc.Label).string = intToTime(this.timer + this.scheduleChart.startTime);
        this.moodBar.getComponent("MoodBar").setTargetMoodValue(this.moodValue);
        if (this.timer >= this.scheduleChart.duration) {
            this.gameResult();
        }
    };
    __decorate([
        property({ type: cc.Prefab })
    ], Game.prototype, "positiveTaskItemPrefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Game.prototype, "mutualTaskItemPrefab", void 0);
    __decorate([
        property({ type: cc.Prefab })
    ], Game.prototype, "negativeTaskItemPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "clock", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "scheduleBarArea", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "taskItemArea", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "moodBar", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "gameOverNode", void 0);
    __decorate([
        property
    ], Game.prototype, "timeSpeed", void 0);
    __decorate([
        property
    ], Game.prototype, "timer", void 0);
    __decorate([
        property
    ], Game.prototype, "moodValue", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;
function intToTime(timer) {
    var hours = Math.floor(timer / 60);
    var minutes = Math.floor(timer % 60);
    return (hours < 10 ? ("0" + hours) : "" + hours) + ":" + (minutes < 10 ? ("0" + minutes) : "" + minutes);
}

cc._RF.pop();