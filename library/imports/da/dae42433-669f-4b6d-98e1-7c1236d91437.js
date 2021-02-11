"use strict";
cc._RF.push(module, 'dae42QzZp9LbZjhfBI22RQ3', 'Task');
// Script/Task.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Task = /** @class */ (function () {
    function Task() {
        this.text = '';
        this.duration = 0;
        this.moodEffect = 0;
        this.triggerFailureString = '';
        // If fixed time >= 0, it will be fixed in schedule bar at position fixedTime / RESOLUTION
        this.fixedTime = -1;
    }
    __decorate([
        property(cc.String)
    ], Task.prototype, "text", void 0);
    __decorate([
        property(cc.Integer)
    ], Task.prototype, "duration", void 0);
    __decorate([
        property(cc.Integer)
    ], Task.prototype, "moodEffect", void 0);
    __decorate([
        property(cc.String)
    ], Task.prototype, "triggerFailureString", void 0);
    __decorate([
        property(cc.Integer)
    ], Task.prototype, "fixedTime", void 0);
    Task = __decorate([
        ccclass('task')
    ], Task);
    return Task;
}());
exports.default = Task;

cc._RF.pop();