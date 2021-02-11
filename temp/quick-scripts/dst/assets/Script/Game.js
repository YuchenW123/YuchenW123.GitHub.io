
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUEsQ0FBQyxDQUFBLENBQUMsR0FBRyxHQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUUsT0FBTyxDQUFDLENBQUM7QUFDckcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuaW1wb3J0IFNjaGVkdWxlIGZyb20gJy4vU2NoZWR1bGUnO1xyXG5pbXBvcnQgeyBSRVNPTFVUSU9OIH0gZnJvbSAnLi9TY2hlZHVsZUJhcic7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShcclxuICAgICAgICB7dHlwZTogY2MuUHJlZmFifVxyXG4gICAgKVxyXG4gICAgcG9zaXRpdmVUYXNrSXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoXHJcbiAgICAgICAge3R5cGU6IGNjLlByZWZhYn1cclxuICAgIClcclxuICAgIG11dHVhbFRhc2tJdGVtUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShcclxuICAgICAgICB7dHlwZTogY2MuUHJlZmFifVxyXG4gICAgKVxyXG4gICAgbmVnYXRpdmVUYXNrSXRlbVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNsb2NrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNjaGVkdWxlQmFyQXJlYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXNrSXRlbUFyZWE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbW9vZEJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lT3Zlck5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgdGltZVNwZWVkID0gMTtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRpbWVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIG1vb2RWYWx1ZSA9IDA7XHJcblxyXG4gICAgc2NoZWR1bGVDaGFydDogU2NoZWR1bGUgPSB7XHJcbiAgICAgICAgZHVyYXRpb246IDM2MCxcclxuICAgICAgICBtb29kTGltaXQ6IDUwLFxyXG4gICAgICAgIHN0YXJ0TW9vZDogMCxcclxuICAgICAgICBzdGFydFRpbWU6IDY2MCxcclxuICAgICAgICB0aW1lU3BlZWQ6IDEsXHJcbiAgICB9XHJcblxyXG4gICAgdGFza05vZGVzOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICB0YXNrczogVGFza1tdID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCLmtJfohLhcIixcclxuICAgICAgICAgICAgbW9vZEVmZmVjdDogLTEwLFxyXG4gICAgICAgICAgICB0cmlnZ2VyRmFpbHVyZVN0cmluZzogXCLmgI7kuYjngbDlpLTlnJ/ohLjop4HkurrllYrvvIFcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDYwLFxyXG4gICAgICAgICAgICBmaXhlZFRpbWU6IC0xLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIuWMluWmhlwiLFxyXG4gICAgICAgICAgICBtb29kRWZmZWN0OiAtMjUsXHJcbiAgICAgICAgICAgIHRyaWdnZXJGYWlsdXJlU3RyaW5nOiBcIuS4jeWMluWmhue7neWvueS4jeS8muWHuumXqOeahO+8gVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNjAsXHJcbiAgICAgICAgICAgIGZpeGVkVGltZTogLTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwi6LW35bqKXCIsXHJcbiAgICAgICAgICAgIG1vb2RFZmZlY3Q6IC0yNSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDQ1LFxyXG4gICAgICAgICAgICBmaXhlZFRpbWU6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwi5ouJ5bGOXCIsXHJcbiAgICAgICAgICAgIG1vb2RFZmZlY3Q6IDI1LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNDUsXHJcbiAgICAgICAgICAgIGZpeGVkVGltZTogLTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwi6LWW5bqKXCIsXHJcbiAgICAgICAgICAgIG1vb2RFZmZlY3Q6ICs1MCxcclxuICAgICAgICAgICAgZHVyYXRpb246IDQ1LFxyXG4gICAgICAgICAgICBmaXhlZFRpbWU6IC0xLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIuaMkeepv+iho+acjVwiLFxyXG4gICAgICAgICAgICBtb29kRWZmZWN0OiAtNTAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0NSxcclxuICAgICAgICAgICAgZml4ZWRUaW1lOiAtMSxcclxuICAgICAgICAgICAgdHJpZ2dlckZhaWx1cmVTdHJpbmc6XCLnqb/ooaPmnI3nqb/lpKrkuYXkuoYhXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwi56Oo6LmtXCIsXHJcbiAgICAgICAgICAgIG1vb2RFZmZlY3Q6IDAsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0NSxcclxuICAgICAgICAgICAgZml4ZWRUaW1lOiAxNTAsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHNldFRpbWVTcGVlZChuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50aW1lU3BlZWQgPSBuZXdWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lcihuZXdWYWx1ZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpbWVyID0gbmV3VmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXRNb29kVmFsdWUobmV3VmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW9vZFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5tb29kQmFyLmdldENvbXBvbmVudChcIk1vb2RCYXJcIikuc2V0VGFyZ2V0TW9vZFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRNb29kVmFsdWUobmV3VmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW9vZFZhbHVlICs9IG5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMubW9vZEJhci5nZXRDb21wb25lbnQoXCJNb29kQmFyXCIpLnNldFRhcmdldE1vb2RWYWx1ZSh0aGlzLm1vb2RWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3NwYXduTmV3VGFza0l0ZW0odGFzazogVGFzaykge1xyXG4gICAgICAgIGxldCByYW5kb21lSWQgPSBcIjAwXCIgKyBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIGxldCBuZXdUYXNrSXRlbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0YXNrLm1vb2RFZmZlY3QgPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5uZWdhdGl2ZVRhc2tJdGVtUHJlZmFiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhc2subW9vZEVmZmVjdCA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5tdXR1YWxUYXNrSXRlbVByZWZhYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VGFza0l0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvc2l0aXZlVGFza0l0ZW1QcmVmYWIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3VGFza0l0ZW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNMSUNFRDtcclxuXHJcbiAgICAgICAgbmV3VGFza0l0ZW0uZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1cIikudGFzayA9IHRhc2s7XHJcbiAgICAgICAgbmV3VGFza0l0ZW0uZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1cIikuaWQgPSByYW5kb21lSWQ7XHJcbiAgICAgICAgLy8gbmV3VGFza0l0ZW0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuVFJJTU1FRDtcclxuXHJcbiAgICAgICAgbmV3VGFza0l0ZW0ud2lkdGggPSBNYXRoLmZsb29yKHRoaXMuc2NoZWR1bGVCYXJBcmVhLmdldENoaWxkQnlOYW1lKFwiU2NoZWR1bGVCYXJcIikud2lkdGggKiB0YXNrLmR1cmF0aW9uIC8gdGhpcy5zY2hlZHVsZUNoYXJ0LmR1cmF0aW9uICogMC45KTtcclxuICAgICAgICBuZXdUYXNrSXRlbS5oZWlnaHQgPSB0aGlzLnNjaGVkdWxlQmFyQXJlYS5nZXRDaGlsZEJ5TmFtZShcIlNjaGVkdWxlQmFyXCIpLmhlaWdodCowLjk7XHJcbiAgICAgICAgbmV3VGFza0l0ZW0uZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1cIikuc2NoZWR1bGVCYXIgPSB0aGlzLnNjaGVkdWxlQmFyQXJlYS5nZXRDaGlsZEJ5TmFtZShcIlNjaGVkdWxlQmFyXCIpO1xyXG4gICAgICAgIG5ld1Rhc2tJdGVtLmdldENvbXBvbmVudChcIlRhc2tJdGVtXCIpLnRhc2tJdGVtQXJlYUxheW91dCA9IHRoaXMudGFza0l0ZW1BcmVhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0YXNrLmZpeGVkVGltZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCB0byBzY2hlZHVsZUJhclxyXG4gICAgICAgICAgICBuZXdUYXNrSXRlbS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVwiKS5jYW5Nb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVCYXJBcmVhLmdldENvbXBvbmVudEluQ2hpbGRyZW4oXCJTY2hlZHVsZUJhclwiKS5ub2RlLmFkZENoaWxkKG5ld1Rhc2tJdGVtKTtcclxuICAgICAgICAgICAgbmV3VGFza0l0ZW0ucG9zaXRpb24gPSB0aGlzLnNjaGVkdWxlQmFyQXJlYS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKFwiU2NoZWR1bGVCYXJcIikuaW5zZXJ0Rml4ZWRUYXNrKHRhc2suZml4ZWRUaW1lLCB0YXNrLmR1cmF0aW9uLCBuZXdUYXNrSXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRvIHRhc2sgaXRlbSBhcmVhXHJcbiAgICAgICAgICAgIHRoaXMudGFza0l0ZW1BcmVhLmFkZENoaWxkKG5ld1Rhc2tJdGVtKTtcclxuICAgICAgICAgICAgdGhpcy50YXNrSXRlbUFyZWEuZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1BcmVhTGF5b3V0XCIpLnJlYXJyYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3VGFza0l0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgLy8gRW5hYmxlIGZhaWwgd2luZG93IGFuZCBkaXNwbGF5IHN1ZGRlbiBkZWF0aCBtZXNzYWdlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR2FtZU92ZXJTY3JlZW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwZXJmZWN0V2luKCkge1xyXG4gICAgICAgIC8vIEVuYWJsZSB3aW4gd2luZG93IGFuZCBkaXNwbGF5IHBlcmZlY3QgbWVzc2FnZVxyXG4gICAgICAgIHRoaXMud2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luKCkge1xyXG4gICAgICAgIC8vIEVuYWJsZSB3aW4gd2luZG93IGFuZCBkaXNwbGF5IHdpbiBtZXNzYWdlXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiV2luU2NyZWVuXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9zZShmYWlsU3RyaW5nOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBFbmFibGUgbG9zZSB3aW5kb3cgYW5kIGRpc3BsYXkgbWVzc2FnZSBmcm9tIGNhbmRpdGF0ZXNcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMb3NlU2NyZWVuXCIpLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmYWlsU3RyaW5nO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxvc2VTY3JlZW5cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnYW1lUmVzdWx0KCkge1xyXG4gICAgICAgIHRoaXMudGltZVNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLnRhc2tOb2Rlcykge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVwiKS51c2VkID09IGZhbHNlICYmIGl0ZW0uZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1cIikudGFzay5tb29kRWZmZWN0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhaWxTdHJpbmcgPSBpdGVtLmdldENvbXBvbmVudChcIlRhc2tJdGVtXCIpLnRhc2sudHJpZ2dlckZhaWx1cmVTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2UoZmFpbFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW9vZFZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJmZWN0V2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy53aW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJXaW5TY3JlZW5cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZUJhckFyZWEueCA9IC10aGlzLm5vZGUud2lkdGgqMC40OFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVCYXJBcmVhLndpZHRoID0gdGhpcy5ub2RlLndpZHRoICogMC45NjtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlQmFyQXJlYS5nZXRDaGlsZEJ5TmFtZShcIlNjaGVkdWxlQmFyXCIpLmdldENvbXBvbmVudChcIlNjaGVkdWxlQmFyXCIpLnNjaGVkdWxlQ2hhcnQgPSB0aGlzLnNjaGVkdWxlQ2hhcnQ7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZUJhckFyZWEuZ2V0Q2hpbGRCeU5hbWUoXCJTY2hlZHVsZUJhclwiKS53aWR0aCA9IHRoaXMubm9kZS53aWR0aCAqIDAuOTY7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZUJhckFyZWEuZ2V0Q2hpbGRCeU5hbWUoXCJTY2hlZHVsZUJhclwiKS5nZXRDb21wb25lbnQoXCJTY2hlZHVsZUJhclwiKS5jZWxscyA9IG5ldyBBcnJheSh0aGlzLnNjaGVkdWxlQ2hhcnQuZHVyYXRpb24vUkVTT0xVVElPTikuZmlsbChudWxsKTtcclxuICAgICAgICB0aGlzLm1vb2RCYXIud2lkdGggPSB0aGlzLm5vZGUud2lkdGggKiAwLjk2O1xyXG4gICAgICAgIHRoaXMudGFza0l0ZW1BcmVhLndpZHRoID0gdGhpcy5ub2RlLndpZHRoICogMC45NjtcclxuICAgICAgICB0aGlzLmNsb2NrLnggPSAtdGhpcy5ub2RlLndpZHRoKjAuNDg7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGltZVNwZWVkKHRoaXMuc2NoZWR1bGVDaGFydC50aW1lU3BlZWQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudGFza3MpIHtcclxuICAgICAgICAgICB0aGlzLnRhc2tOb2Rlcy5wdXNoKHRoaXMuX3NwYXduTmV3VGFza0l0ZW0oaXRlbSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb29kQmFyLmdldENvbXBvbmVudChcIk1vb2RCYXJcIikuc2V0TW9vZExpbWl0KHRoaXMuc2NoZWR1bGVDaGFydC5tb29kTGltaXQpO1xyXG4gICAgICAgIHRoaXMubW9vZEJhci5nZXRDb21wb25lbnQoXCJNb29kQmFyXCIpLnNldEN1cnJlbnRNb29kVmFsdWUodGhpcy5zY2hlZHVsZUNoYXJ0LnN0YXJ0TW9vZCk7XHJcbiAgICAgICAgdGhpcy5tb29kVmFsdWUgPSB0aGlzLnNjaGVkdWxlQ2hhcnQuc3RhcnRNb29kO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldFRpbWVyKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLnRpbWVyICs9IHRoaXMudGltZVNwZWVkICogZHQ7XHJcbiAgICAgICAgdGhpcy5jbG9jay5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGludFRvVGltZSh0aGlzLnRpbWVyICsgdGhpcy5zY2hlZHVsZUNoYXJ0LnN0YXJ0VGltZSk7XHJcbiAgICAgICAgdGhpcy5tb29kQmFyLmdldENvbXBvbmVudChcIk1vb2RCYXJcIikuc2V0VGFyZ2V0TW9vZFZhbHVlKHRoaXMubW9vZFZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLnNjaGVkdWxlQ2hhcnQuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lUmVzdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnRUb1RpbWUodGltZXI6IG51bWJlcikge1xyXG4gICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lciAvIDYwKTtcclxuICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lciAlIDYwKTtcclxuICAgIHJldHVybiAoaG91cnMgPCAxMCA/IChcIjBcIiArIGhvdXJzKSA6IFwiXCIraG91cnMpICsgXCI6XCIgKyhtaW51dGVzIDwgMTA/KFwiMFwiK21pbnV0ZXMpIDogXCJcIisgbWludXRlcyk7XHJcbn1cclxuIl19