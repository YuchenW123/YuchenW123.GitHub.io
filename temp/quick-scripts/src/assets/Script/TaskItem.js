"use strict";
cc._RF.push(module, '25813lLRo9DL7xNFevBNsY4', 'TaskItem');
// Script/TaskItem.ts

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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Task_1 = require("./Task");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaskItem = /** @class */ (function (_super) {
    __extends(TaskItem, _super);
    function TaskItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 'testid';
        // On spawn the task Item should spawn label for itself.
        _this.labelTemplate = null;
        _this.task = null;
        // TODO: remember to add scheduleBar & taskItemAreaLayout when spawning tasks
        _this.scheduleBar = null;
        _this.taskItemAreaLayout = null;
        _this.canMove = true;
        _this.used = false;
        _this._oldPosition = null;
        _this.target = null;
        _this.scheduleBarRect = null;
        _this.taskItemAreaRect = null;
        return _this;
    }
    TaskItem.prototype.getTaskDuration = function () {
        if (this.task) {
            return this.task.duration;
        }
        else {
            return -1;
        }
    };
    TaskItem.prototype._spawnLabel = function () {
        var newLabel = cc.instantiate(this.labelTemplate);
        newLabel.width = this.node.width * 0.95;
        newLabel.getComponent(cc.Label).string = this.task.text;
        this.node.addChild(newLabel);
    };
    TaskItem.prototype._onTouchMove = function (touchEvent) {
        if (this.canMove) {
            // Whenever moving, remove it from schedule bar
            if (this.node.parent === this.scheduleBar) {
                this.node.parent = this.taskItemAreaLayout;
                this.scheduleBar.getComponent("ScheduleBar").markFree(this.node);
            }
            this.node.scale = 1.1;
            var location = touchEvent.getLocation();
            this.node.position = this.node.parent.convertToNodeSpaceAR(location);
        }
    };
    TaskItem.prototype._onTouchEnd = function (touchEvent) {
        if (this.canMove) {
            this.node.scale = 1;
            this.taskItemAreaRect = this.taskItemAreaLayout.getBoundingBox();
            this.scheduleBarRect = this.scheduleBar.getBoundingBox();
            // get world location from touch event
            var location = touchEvent.getLocation();
            // Get target location relative to target's parent to compare to rectangle container
            // let locationTaskItemAreaAR: cc.Vec3 = this.taskItemAreaLayout.parent.convertToNodeSpaceAR(location);
            var locationScheduleBarAR = this.scheduleBar.parent.convertToNodeSpaceAR(location);
            // If the point lands within schedulebar area, check the scheduleBar.validate() method for validated loacation
            if (this.scheduleBarRect.contains(cc.v2(locationScheduleBarAR.x, locationScheduleBarAR.y))) {
                // Translate the location to scheduleBar relative
                var locationWithinScheduleBarAR = this.scheduleBar.convertToNodeSpaceAR(location);
                // Get relative location
                var validatedPosition = this.scheduleBar.getComponent("ScheduleBar").validate(locationWithinScheduleBarAR, this.node);
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
    };
    // LIFE-CYCLE CALLBACKS:
    TaskItem.prototype.onLoad = function () {
        var _this = this;
        if (!this.task) {
            throw ("None task found for onLoad()!");
        }
        // Spawn label
        this._spawnLabel();
        // save original position
        this._oldPosition = this.node.position;
        this.node.on(cc.Node.EventType.TOUCH_START, function () { _this._oldPosition = _this.node.position; }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    };
    TaskItem.prototype.onDestroy = function () {
        var _this = this;
        this.node.off(cc.Node.EventType.TOUCH_START, function () { _this._oldPosition = _this.node.position; }, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    };
    TaskItem.prototype.start = function () {
    };
    TaskItem.prototype.update = function (dt) {
    };
    __decorate([
        property(cc.String)
    ], TaskItem.prototype, "id", void 0);
    __decorate([
        property(cc.Prefab)
    ], TaskItem.prototype, "labelTemplate", void 0);
    __decorate([
        property({
            type: Task_1.default,
        })
    ], TaskItem.prototype, "task", void 0);
    __decorate([
        property(cc.Node)
    ], TaskItem.prototype, "scheduleBar", void 0);
    __decorate([
        property(cc.Node)
    ], TaskItem.prototype, "taskItemAreaLayout", void 0);
    __decorate([
        property(cc.Boolean)
    ], TaskItem.prototype, "canMove", void 0);
    __decorate([
        property(cc.Boolean)
    ], TaskItem.prototype, "used", void 0);
    TaskItem = __decorate([
        ccclass
    ], TaskItem);
    return TaskItem;
}(cc.Component));
exports.default = TaskItem;

cc._RF.pop();