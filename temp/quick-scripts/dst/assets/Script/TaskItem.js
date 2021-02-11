
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TaskItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYXNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRiwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1SUM7UUFySUcsUUFBRSxHQUFHLFFBQVEsQ0FBQTtRQUViLHdEQUF3RDtRQUV4RCxtQkFBYSxHQUFHLElBQUksQ0FBQztRQUtyQixVQUFJLEdBQVMsSUFBSSxDQUFDO1FBRWxCLDZFQUE2RTtRQUU3RSxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1Qix3QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFHbkMsYUFBTyxHQUFHLElBQUksQ0FBQztRQUdmLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFYixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUU1QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLHNCQUFnQixHQUFZLElBQUksQ0FBQzs7SUF3R3JDLENBQUM7SUF0R0csa0NBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDN0I7YUFBTTtZQUNILE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjtJQUNMLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxD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Q0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO0lBQ1YsQ0FBQztJQXBJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNQO0lBSWI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDQztJQUtyQjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxjQUFJO1NBQ2IsQ0FBQzswQ0FDZ0I7SUFJbEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNpQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzZDQUNOO0lBR2Y7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDUjtJQXhCSSxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUk1QjtJQUFELGVBQUM7Q0F2SUQsQUF1SUMsQ0F2SXFDLEVBQUUsQ0FBQyxTQUFTLEdBdUlqRDtrQkF2SW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIGlkID0gJ3Rlc3RpZCdcclxuXHJcbiAgICAvLyBPbiBzcGF3biB0aGUgdGFzayBJdGVtIHNob3VsZCBzcGF3biBsYWJlbCBmb3IgaXRzZWxmLlxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGxhYmVsVGVtcGxhdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogVGFzayxcclxuICAgIH0pXHJcbiAgICB0YXNrOiBUYXNrID0gbnVsbDtcclxuXHJcbiAgICAvLyBUT0RPOiByZW1lbWJlciB0byBhZGQgc2NoZWR1bGVCYXIgJiB0YXNrSXRlbUFyZWFMYXlvdXQgd2hlbiBzcGF3bmluZyB0YXNrc1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzY2hlZHVsZUJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YXNrSXRlbUFyZWFMYXlvdXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Cb29sZWFuKVxyXG4gICAgY2FuTW92ZSA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICB1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgX29sZFBvc2l0aW9uOmNjLlZlYzMgPSBudWxsO1xyXG5cclxuICAgIHRhcmdldDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgc2NoZWR1bGVCYXJSZWN0OiBjYy5SZWN0ID0gbnVsbDtcclxuICAgIHRhc2tJdGVtQXJlYVJlY3Q6IGNjLlJlY3QgPSBudWxsO1xyXG5cclxuICAgIGdldFRhc2tEdXJhdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy50YXNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhc2suZHVyYXRpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfc3Bhd25MYWJlbCgpIHtcclxuICAgICAgICBsZXQgbmV3TGFiZWwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxhYmVsVGVtcGxhdGUpO1xyXG4gICAgICAgIG5ld0xhYmVsLndpZHRoID0gdGhpcy5ub2RlLndpZHRoICogMC45NTtcclxuICAgICAgICBuZXdMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudGFzay50ZXh0O1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdMYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgX29uVG91Y2hNb3ZlKHRvdWNoRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW5ldmVyIG1vdmluZywgcmVtb3ZlIGl0IGZyb20gc2NoZWR1bGUgYmFyXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50ID09PSB0aGlzLnNjaGVkdWxlQmFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy50YXNrSXRlbUFyZWFMYXlvdXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlQmFyLmdldENvbXBvbmVudChcIlNjaGVkdWxlQmFyXCIpLm1hcmtGcmVlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuMTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gdG91Y2hFdmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGxvY2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIF9vblRvdWNoRW5kKHRvdWNoRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5Nb3ZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhc2tJdGVtQXJlYVJlY3QgPSB0aGlzLnRhc2tJdGVtQXJlYUxheW91dC5nZXRCb3VuZGluZ0JveCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlQmFyUmVjdCA9IHRoaXMuc2NoZWR1bGVCYXIuZ2V0Qm91bmRpbmdCb3goKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB3b3JsZCBsb2NhdGlvbiBmcm9tIHRvdWNoIGV2ZW50XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IHRvdWNoRXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0YXJnZXQgbG9jYXRpb24gcmVsYXRpdmUgdG8gdGFyZ2V0J3MgcGFyZW50IHRvIGNvbXBhcmUgdG8gcmVjdGFuZ2xlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAvLyBsZXQgbG9jYXRpb25UYXNrSXRlbUFyZWFBUjogY2MuVmVjMyA9IHRoaXMudGFza0l0ZW1BcmVhTGF5b3V0LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblNjaGVkdWxlQmFyQVI6IGNjLlZlYzMgPSB0aGlzLnNjaGVkdWxlQmFyLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgcG9pbnQgbGFuZHMgd2l0aGluIHNjaGVkdWxlYmFyIGFyZWEsIGNoZWNrIHRoZSBzY2hlZHVsZUJhci52YWxpZGF0ZSgpIG1ldGhvZCBmb3IgdmFsaWRhdGVkIGxvYWNhdGlvblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2hlZHVsZUJhclJlY3QuY29udGFpbnMoY2MudjIobG9jYXRpb25TY2hlZHVsZUJhckFSLngsIGxvY2F0aW9uU2NoZWR1bGVCYXJBUi55KSkpe1xyXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNsYXRlIHRoZSBsb2NhdGlvbiB0byBzY2hlZHVsZUJhciByZWxhdGl2ZVxyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uV2l0aGluU2NoZWR1bGVCYXJBUiA9IHRoaXMuc2NoZWR1bGVCYXIuY29udmVydFRvTm9kZVNwYWNlQVIobG9jYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEdldCByZWxhdGl2ZSBsb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRlZFBvc2l0aW9uID0gdGhpcy5zY2hlZHVsZUJhci5nZXRDb21wb25lbnQoXCJTY2hlZHVsZUJhclwiKS52YWxpZGF0ZShsb2NhdGlvbldpdGhpblNjaGVkdWxlQmFyQVIsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVkUG9zaXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnNjaGVkdWxlQmFyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHZhbGlkYXRlZFBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZWFycmFuZ2UgVGFza0l0ZW1BcmVhTGF5b3V0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrSXRlbUFyZWFMYXlvdXQuZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1BcmVhTGF5b3V0XCIpLnJlYXJyYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gc2NoZWR1bGUgYmFyIHN1Y2Nlc3NmdWxcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC8vIElmIG5vdCBtb3ZlZCB0byBzY2hlZHVsZUJhciwgdGhlbiByZXNldCBiYWNrIHRvIHRhc2tJdGVtQXJlYUxheW91dFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gdGhpcy50YXNrSXRlbUFyZWFMYXlvdXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBDYWxsIHVwZGF0ZSBvbiBsYXlvdXRcclxuICAgICAgICAgICAgdGhpcy50YXNrSXRlbUFyZWFMYXlvdXQuZ2V0Q29tcG9uZW50KFwiVGFza0l0ZW1BcmVhTGF5b3V0XCIpLnJlYXJyYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGFzaykge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJOb25lIHRhc2sgZm91bmQgZm9yIG9uTG9hZCgpIVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTcGF3biBsYWJlbFxyXG4gICAgICAgIHRoaXMuX3NwYXduTGFiZWwoKTtcclxuXHJcbiAgICAgICAgLy8gc2F2ZSBvcmlnaW5hbCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuX29sZFBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICBcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpPT57dGhpcy5fb2xkUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247fSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCk9Pnt0aGlzLl9vbGRQb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbjt9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fb25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgIH1cclxufVxyXG4iXX0=