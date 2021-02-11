"use strict";
cc._RF.push(module, 'b8f44/8a7xLB6OW5iPvqCW8', 'ScheduleBar');
// Script/ScheduleBar.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
exports.RESOLUTION = void 0;
var Schedule_1 = require("./Schedule");
exports.RESOLUTION = 15;
var PLACEHOLDER = new cc.Node();
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScheduleBar = /** @class */ (function (_super) {
    __extends(ScheduleBar, _super);
    function ScheduleBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scheduleChart = null;
        // Stores the occupied information
        _this.cells = [];
        _this.game = null;
        _this.currentCellIndex = -1;
        return _this;
    }
    ScheduleBar.prototype._checkFreeSpace = function (xlocation, duration) {
        var targetCellIndex = Math.floor(xlocation / (this.node.width / this.cells.length));
        for (var i = targetCellIndex; i < targetCellIndex + duration; i++) {
            if (this.cells[i] != null || i >= this.cells.length) {
                return -1;
            }
        }
        return targetCellIndex;
    };
    // Duration here is resoluted
    ScheduleBar.prototype._markOccupied = function (targetCellIndex, durationInCells, taskNode) {
        for (var i = targetCellIndex; i < targetCellIndex + durationInCells; i++) {
            this.cells[i] = taskNode;
        }
        return this.cells;
    };
    ScheduleBar.prototype.markFree = function (taskNode) {
        var startIndex = this.cells.findIndex(function (node) { return node
            && node.getComponent("TaskItem")
            && node.getComponent("TaskItem").id === taskNode.getComponent("TaskItem").id; }, this);
        var taskDuration = taskNode.getComponent("TaskItem").getTaskDuration();
        if (startIndex == -1 || taskDuration == -1) {
            return -1;
        }
        else {
            for (var i = startIndex; i < startIndex + taskDuration / exports.RESOLUTION; i++) {
                this.cells[i] = null;
            }
            return taskDuration;
        }
    };
    ScheduleBar.prototype._durationToPixel = function (duration) {
        return Math.floor(this.node.width * duration / this.scheduleChart.duration);
    };
    // If the given duration can be fitted into the closest grid location,
    // return the closest fitted location, otherwise return null
    ScheduleBar.prototype.validate = function (location, taskNode) {
        var duration = taskNode.getComponent("TaskItem").getTaskDuration() / exports.RESOLUTION;
        var freeIndex = this._checkFreeSpace(location.x, duration);
        if (freeIndex >= 0) {
            console.log("freeIndex in Validate(): " + freeIndex);
            this._markOccupied(freeIndex, duration, taskNode);
            return cc.v2(freeIndex * this.node.width / this.cells.length, this.node.y);
        }
        else {
            return null;
        }
    };
    // Returns the position of the inserted TaskItem
    ScheduleBar.prototype.insertFixedTask = function (fixedTime, duration, taskNode) {
        var freeIndex = Math.floor(fixedTime / exports.RESOLUTION);
        this._markOccupied(freeIndex, duration / exports.RESOLUTION, taskNode);
        return cc.v2(freeIndex * this.node.width / this.cells.length, this.node.y);
    };
    // LIFE-CYCLE CALLBACKS:
    ScheduleBar.prototype.onLoad = function () {
        this.currentCellIndex = -1;
        while (this.cells.length < this.scheduleChart.duration / exports.RESOLUTION) {
            this.cells.push(null);
        }
    };
    ScheduleBar.prototype.start = function () {
    };
    ScheduleBar.prototype.update = function (dt) {
        var timerValue = this.game.getComponent("Game").timer;
        var newCellIndex = Math.floor(timerValue / exports.RESOLUTION);
        if (newCellIndex !== this.currentCellIndex) {
            this.currentCellIndex = newCellIndex;
            console.log(newCellIndex);
            if (this.cells[newCellIndex] && this.cells[newCellIndex].getComponent("TaskItem").used == false) {
                this.game.getComponent("Game").addMoodValue(this.cells[newCellIndex].getComponent("TaskItem").task.moodEffect);
                this.cells[newCellIndex].getComponent("TaskItem").used = true;
                this.cells[newCellIndex].getComponent("TaskItem").canMove = false;
            }
            else {
                this.cells[newCellIndex] = PLACEHOLDER;
            }
        }
        this.node.parent.getChildByName("TimeMask").width = timerValue / this.scheduleChart.duration * this.node.width;
    };
    __decorate([
        property({
            type: Schedule_1.default,
        })
    ], ScheduleBar.prototype, "scheduleChart", void 0);
    __decorate([
        property([cc.Node])
    ], ScheduleBar.prototype, "cells", void 0);
    __decorate([
        property(cc.Node)
    ], ScheduleBar.prototype, "game", void 0);
    ScheduleBar = __decorate([
        ccclass
    ], ScheduleBar);
    return ScheduleBar;
}(cc.Component));
exports.default = ScheduleBar;

cc._RF.pop();