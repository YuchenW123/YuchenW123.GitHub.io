
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ScheduleBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTY2hlZHVsZUJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsdUNBQWtDO0FBRXJCLFFBQUEsVUFBVSxHQUFXLEVBQUUsQ0FBQztBQUVyQyxJQUFNLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTBHQztRQXRHRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixrQ0FBa0M7UUFFbEMsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUdyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLHNCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDOztJQTZGMUIsQ0FBQztJQTNGRyxxQ0FBZSxHQUFmLFVBQWdCLFNBQWlCLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFcEYsS0FBSyxJQUFJLENBQUMsR0FBRyxlQUFlLEVBQUUsQ0FBQyxHQUFHLGVBQWUsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pELE9BQU8sQ0FBQyxDQUFDLENB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QyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMvRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNILElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsV0FBVyxDQUFDO2FBQzFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNqSCxDQUFDO0lBckdEO1FBSEMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLGtCQUFRO1NBQ2pCLENBQUM7c0RBQzZCO0lBSS9CO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzhDQUNDO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0c7SUFYSixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMEcvQjtJQUFELGtCQUFDO0NBMUdELEFBMEdDLENBMUd3QyxFQUFFLENBQUMsU0FBUyxHQTBHcEQ7a0JBMUdvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IFNjaGVkdWxlIGZyb20gXCIuL1NjaGVkdWxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVTT0xVVElPTjogbnVtYmVyID0gMTU7XHJcblxyXG5jb25zdCBQTEFDRUhPTERFUiA9IG5ldyBjYy5Ob2RlKCk7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlQmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogU2NoZWR1bGUsXHJcbiAgICB9KVxyXG4gICAgc2NoZWR1bGVDaGFydDogU2NoZWR1bGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFN0b3JlcyB0aGUgb2NjdXBpZWQgaW5mb3JtYXRpb25cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICBjZWxsczpjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGN1cnJlbnRDZWxsSW5kZXggPSAtMTtcclxuXHJcbiAgICBfY2hlY2tGcmVlU3BhY2UoeGxvY2F0aW9uOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0Q2VsbEluZGV4ID0gTWF0aC5mbG9vcih4bG9jYXRpb24gLyAodGhpcy5ub2RlLndpZHRoIC8gdGhpcy5jZWxscy5sZW5ndGgpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRhcmdldENlbGxJbmRleDsgaSA8IHRhcmdldENlbGxJbmRleCArIGR1cmF0aW9uOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbaV0gIT0gbnVsbCB8fCBpID49IHRoaXMuY2VsbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRDZWxsSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHVyYXRpb24gaGVyZSBpcyByZXNvbHV0ZWRcclxuICAgIF9tYXJrT2NjdXBpZWQodGFyZ2V0Q2VsbEluZGV4LCBkdXJhdGlvbkluQ2VsbHMsIHRhc2tOb2RlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRhcmdldENlbGxJbmRleDsgaSA8IHRhcmdldENlbGxJbmRleCArIGR1cmF0aW9uSW5DZWxsczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSB0YXNrTm9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0ZyZWUodGFza05vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuY2VsbHMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAobm9kZSkgPT4gbm9kZSBcclxuICAgICAgICAgICAgJiYgbm9kZS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVwiKSBcclxuICAgICAgICAgICAgJiYgbm9kZS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVwiKS5pZCA9PT0gdGFza05vZGUuZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1cIikuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAsIHRoaXMpO1xyXG4gICAgICAgIGxldCB0YXNrRHVyYXRpb24gPSB0YXNrTm9kZS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVwiKS5nZXRUYXNrRHVyYXRpb24oKTtcclxuICAgICAgICBpZiAoc3RhcnRJbmRleCA9PSAtMSB8fCB0YXNrRHVyYXRpb24gPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgc3RhcnRJbmRleCArIHRhc2tEdXJhdGlvbi9SRVNPTFVUSU9OOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbaV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXNrRHVyYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9kdXJhdGlvblRvUGl4ZWwoZHVyYXRpb246IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMubm9kZS53aWR0aCAqIGR1cmF0aW9uIC8gdGhpcy5zY2hlZHVsZUNoYXJ0LmR1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgZ2l2ZW4gZHVyYXRpb24gY2FuIGJlIGZpdHRlZCBpbnRvIHRoZSBjbG9zZXN0IGdyaWQgbG9jYXRpb24sXHJcbiAgICAvLyByZXR1cm4gdGhlIGNsb3Nlc3QgZml0dGVkIGxvY2F0aW9uLCBvdGhlcndpc2UgcmV0dXJuIG51bGxcclxuICAgIHZhbGlkYXRlKGxvY2F0aW9uOiBjYy5WZWMyLCB0YXNrTm9kZTogY2MuTm9kZSkgOiBjYy5WZWMyIHtcclxuICAgICAgICBsZXQgZHVyYXRpb24gPSB0YXNrTm9kZS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVwiKS5nZXRUYXNrRHVyYXRpb24oKSAvIFJFU09MVVRJT047XHJcbiAgICAgICAgbGV0IGZyZWVJbmRleCA9ICB0aGlzLl9jaGVja0ZyZWVTcGFjZShsb2NhdGlvbi54LCBkdXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGZyZWVJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJlZUluZGV4IGluIFZhbGlkYXRlKCk6IFwiICsgZnJlZUluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5fbWFya09jY3VwaWVkKGZyZWVJbmRleCwgZHVyYXRpb24sIHRhc2tOb2RlKVxyXG4gICAgICAgICAgICByZXR1cm4gY2MudjIoZnJlZUluZGV4ICogdGhpcy5ub2RlLndpZHRoIC8gdGhpcy5jZWxscy5sZW5ndGgsIHRoaXMubm9kZS55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIGluc2VydGVkIFRhc2tJdGVtXHJcbiAgICBpbnNlcnRGaXhlZFRhc2soZml4ZWRUaW1lOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIHRhc2tOb2RlOiBjYy5Ob2RlKSA6IGNjLlZlYzIge1xyXG4gICAgICAgIGxldCBmcmVlSW5kZXggPSBNYXRoLmZsb29yKGZpeGVkVGltZS9SRVNPTFVUSU9OKTtcclxuICAgICAgICB0aGlzLl9tYXJrT2NjdXBpZWQoZnJlZUluZGV4LCBkdXJhdGlvbi9SRVNPTFVUSU9OLCB0YXNrTm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKGZyZWVJbmRleCAqIHRoaXMubm9kZS53aWR0aCAvIHRoaXMuY2VsbHMubGVuZ3RoLCB0aGlzLm5vZGUueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsSW5kZXggPSAtMTtcclxuICAgICAgICB3aGlsZSAodGhpcy5jZWxscy5sZW5ndGggPCB0aGlzLnNjaGVkdWxlQ2hhcnQuZHVyYXRpb24gLyBSRVNPTFVUSU9OKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VsbHMucHVzaChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBsZXQgdGltZXJWYWx1ZSA9IHRoaXMuZ2FtZS5nZXRDb21wb25lbnQoXCJHYW1lXCIpLnRpbWVyO1xyXG4gICAgICAgIGxldCBuZXdDZWxsSW5kZXggPSBNYXRoLmZsb29yKHRpbWVyVmFsdWUgLyBSRVNPTFVUSU9OKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0NlbGxJbmRleCAhPT0gdGhpcy5jdXJyZW50Q2VsbEluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENlbGxJbmRleCA9IG5ld0NlbGxJbmRleDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Q2VsbEluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2VsbHNbbmV3Q2VsbEluZGV4XSAmJiB0aGlzLmNlbGxzW25ld0NlbGxJbmRleF0uZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1cIikudXNlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmdldENvbXBvbmVudChcIkdhbWVcIikuYWRkTW9vZFZhbHVlKHRoaXMuY2VsbHNbbmV3Q2VsbEluZGV4XS5nZXRDb21wb25lbnQoXCJUYXNrSXRlbVwiKS50YXNrLm1vb2RFZmZlY3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tuZXdDZWxsSW5kZXhdLmdldENvbXBvbmVudChcIlRhc2tJdGVtXCIpLnVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZWxsc1tuZXdDZWxsSW5kZXhdLmdldENvbXBvbmVudChcIlRhc2tJdGVtXCIpLmNhbk1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbHNbbmV3Q2VsbEluZGV4XSA9IFBMQUNFSE9MREVSO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lTWFza1wiKS53aWR0aCA9IHRpbWVyVmFsdWUvdGhpcy5zY2hlZHVsZUNoYXJ0LmR1cmF0aW9uICogdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==