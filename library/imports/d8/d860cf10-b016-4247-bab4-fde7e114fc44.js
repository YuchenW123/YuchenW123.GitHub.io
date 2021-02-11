"use strict";
cc._RF.push(module, 'd860c8QsBZCR7q0/efhFPxE', 'MoodBar');
// Script/MoodBar.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MoodBar = /** @class */ (function (_super) {
    __extends(MoodBar, _super);
    function MoodBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positiveIcon = null;
        _this.negativeIcon = null;
        _this.mutualIcon = null;
        _this.positiveMoodBar = null;
        _this.negativeMoodBar = null;
        _this.currentMoodValue = 0;
        _this.targetMoodValue = 0;
        _this.moodLimit = 100;
        _this.game = null;
        _this.incrementSpeed = 15;
        return _this;
    }
    MoodBar.prototype.setCurrentMoodValue = function (newValue) {
        this.currentMoodValue = newValue;
    };
    MoodBar.prototype.setTargetMoodValue = function (newValue) {
        this.targetMoodValue = newValue;
    };
    MoodBar.prototype.setMoodLimit = function (newValue) {
        this.moodLimit = newValue;
    };
    MoodBar.prototype.addMoodValue = function (deltaValue) {
        this.targetMoodValue += deltaValue;
    };
    // LIFE-CYCLE CALLBACKS:
    MoodBar.prototype.onLoad = function () { this.node.cascadeOpacity = false; };
    MoodBar.prototype.start = function () {
    };
    MoodBar.prototype.update = function (dt) {
        if (this.currentMoodValue < this.targetMoodValue) {
            this.currentMoodValue = Math.min(this.targetMoodValue, this.currentMoodValue + this.incrementSpeed * dt);
        }
        else if (this.currentMoodValue > this.targetMoodValue) {
            this.currentMoodValue = Math.max(this.targetMoodValue, this.currentMoodValue - this.incrementSpeed * dt);
        }
        if (this.currentMoodValue >= 0) {
            // Show positiveIcon and positive mood bar
            this.negativeMoodBar.width = 0;
            this.positiveMoodBar.width = Math.min(1, Math.abs(this.currentMoodValue) / this.moodLimit) * this.node.width / 2;
            this.positiveMoodBar.active = true;
            this.negativeIcon.active = false;
            if (this.currentMoodValue == 0) {
                this.positiveIcon.active = false;
                this.mutualIcon.active = true;
            }
            else {
                this.mutualIcon.active = false;
                this.positiveIcon.active = true;
                this.positiveIcon.setPosition(Math.min(1, Math.abs(this.currentMoodValue) / this.moodLimit) * this.node.width / 2, 0);
            }
        }
        else {
            // Show negativeIcon and negative mood bar
            this.positiveMoodBar.width = 0;
            this.negativeMoodBar.width = Math.min(1, Math.abs(this.currentMoodValue) / this.moodLimit) * this.node.width / 2;
            this.negativeMoodBar.active = true;
            this.positiveIcon.active = false;
            this.mutualIcon.active = false;
            this.negativeIcon.active = true;
            this.negativeIcon.setPosition(Math.max(-1, -Math.abs(this.currentMoodValue) / this.moodLimit) * this.node.width / 2, 0);
            if (Math.abs(this.currentMoodValue) >= this.moodLimit) {
                this.game.getComponent("Game").gameOver();
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], MoodBar.prototype, "positiveIcon", void 0);
    __decorate([
        property(cc.Node)
    ], MoodBar.prototype, "negativeIcon", void 0);
    __decorate([
        property(cc.Node)
    ], MoodBar.prototype, "mutualIcon", void 0);
    __decorate([
        property(cc.Node)
    ], MoodBar.prototype, "positiveMoodBar", void 0);
    __decorate([
        property(cc.Node)
    ], MoodBar.prototype, "negativeMoodBar", void 0);
    __decorate([
        property(cc.Float)
    ], MoodBar.prototype, "currentMoodValue", void 0);
    __decorate([
        property(cc.Float)
    ], MoodBar.prototype, "targetMoodValue", void 0);
    __decorate([
        property(cc.Float)
    ], MoodBar.prototype, "moodLimit", void 0);
    __decorate([
        property(cc.Node)
    ], MoodBar.prototype, "game", void 0);
    __decorate([
        property(cc.Float)
    ], MoodBar.prototype, "incrementSpeed", void 0);
    MoodBar = __decorate([
        ccclass
    ], MoodBar);
    return MoodBar;
}(cc.Component));
exports.default = MoodBar;

cc._RF.pop();