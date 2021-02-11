"use strict";
cc._RF.push(module, '31978rNHzJFPbsLiMIBXZTb', 'Schedule');
// Script/Schedule.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Schedule = /** @class */ (function () {
    function Schedule() {
        this.duration = 0;
        this.startTime = 0;
        this.startMood = 0;
        this.moodLimit = 100;
        this.timeSpeed = 10.0;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // start () {}
        // update (dt) {}
    }
    __decorate([
        property(cc.Integer)
    ], Schedule.prototype, "duration", void 0);
    __decorate([
        property(cc.Integer)
    ], Schedule.prototype, "startTime", void 0);
    __decorate([
        property(cc.Integer)
    ], Schedule.prototype, "startMood", void 0);
    __decorate([
        property(cc.Integer)
    ], Schedule.prototype, "moodLimit", void 0);
    __decorate([
        property(cc.Float)
    ], Schedule.prototype, "timeSpeed", void 0);
    Schedule = __decorate([
        ccclass('Schedule')
    ], Schedule);
    return Schedule;
}());
exports.default = Schedule;

cc._RF.pop();