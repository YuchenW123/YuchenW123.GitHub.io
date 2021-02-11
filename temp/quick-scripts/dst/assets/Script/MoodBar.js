
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MoodBar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNb29kQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXFDLDJCQUFZO0lBQWpEO1FBQUEscUVBZ0dDO1FBN0ZHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBR2hDLHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUdyQixxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUdwQixlQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFHWixvQkFBYyxHQUFHLEVBQUUsQ0FBQzs7SUFrRXhCLENBQUM7SUFoRUcscUNBQW1CLEdBQW5CLFVBQW9CLFFBQWdCO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFrQixHQUFsQixVQUFtQixRQUFnQjtRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsOEJBQVksR0FBWixVQUFhLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFRCw4QkFBWSxHQUFaLFVBQWEsVUFBa0I7UUFDM0IsSUFBSSxDQUFDLGVBQWUsSUFBSSxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQUdELHdCQUF3QjtJQUV4Qix3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cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb29kQmFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvc2l0aXZlSWNvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBuZWdhdGl2ZUljb246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbXV0dWFsSWNvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3NpdGl2ZU1vb2RCYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbmVnYXRpdmVNb29kQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBjdXJyZW50TW9vZFZhbHVlID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICB0YXJnZXRNb29kVmFsdWUgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIG1vb2RMaW1pdCA9IDEwMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIGluY3JlbWVudFNwZWVkID0gMTU7XHJcblxyXG4gICAgc2V0Q3VycmVudE1vb2RWYWx1ZShuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW9vZFZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFyZ2V0TW9vZFZhbHVlKG5ld1ZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRhcmdldE1vb2RWYWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vb2RMaW1pdChuZXdWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tb29kTGltaXQgPSBuZXdWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRNb29kVmFsdWUoZGVsdGFWYWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRNb29kVmFsdWUgKz0gZGVsdGFWYWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHt0aGlzLm5vZGUuY2FzY2FkZU9wYWNpdHkgPSBmYWxzZTt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vb2RWYWx1ZSA8IHRoaXMudGFyZ2V0TW9vZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vb2RWYWx1ZSA9IE1hdGgubWluKHRoaXMudGFyZ2V0TW9vZFZhbHVlLCB0aGlzLmN1cnJlbnRNb29kVmFsdWUrdGhpcy5pbmNyZW1lbnRTcGVlZCAqIGR0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudE1vb2RWYWx1ZSA+IHRoaXMudGFyZ2V0TW9vZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vb2RWYWx1ZSA9IE1hdGgubWF4KHRoaXMudGFyZ2V0TW9vZFZhbHVlLCB0aGlzLmN1cnJlbnRNb29kVmFsdWUtdGhpcy5pbmNyZW1lbnRTcGVlZCAqIGR0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNb29kVmFsdWUgPj0gMCkge1xyXG4gICAgICAgICAgICAvLyBTaG93IHBvc2l0aXZlSWNvbiBhbmQgcG9zaXRpdmUgbW9vZCBiYXJcclxuICAgICAgICAgICAgdGhpcy5uZWdhdGl2ZU1vb2RCYXIud2lkdGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aXZlTW9vZEJhci53aWR0aCA9IE1hdGgubWluKDEsIE1hdGguYWJzKHRoaXMuY3VycmVudE1vb2RWYWx1ZSkvdGhpcy5tb29kTGltaXQpICogdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZU1vb2RCYXIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE1vb2RWYWx1ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aXZlSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXV0dWFsSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXR1YWxJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZUljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpdmVJY29uLnNldFBvc2l0aW9uKE1hdGgubWluKDEsIE1hdGguYWJzKHRoaXMuY3VycmVudE1vb2RWYWx1ZSkvdGhpcy5tb29kTGltaXQpICogdGhpcy5ub2RlLndpZHRoIC8gMiwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTaG93IG5lZ2F0aXZlSWNvbiBhbmQgbmVnYXRpdmUgbW9vZCBiYXJcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGl2ZU1vb2RCYXIud2lkdGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5lZ2F0aXZlTW9vZEJhci53aWR0aCA9IE1hdGgubWluKDEsIE1hdGguYWJzKHRoaXMuY3VycmVudE1vb2RWYWx1ZSkvdGhpcy5tb29kTGltaXQpICogdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5uZWdhdGl2ZU1vb2RCYXIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpdmVJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm11dHVhbEljb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubmVnYXRpdmVJY29uLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5uZWdhdGl2ZUljb24uc2V0UG9zaXRpb24oTWF0aC5tYXgoLTEsIC0gTWF0aC5hYnModGhpcy5jdXJyZW50TW9vZFZhbHVlKS90aGlzLm1vb2RMaW1pdCkgKiB0aGlzLm5vZGUud2lkdGggLyAyLCAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmN1cnJlbnRNb29kVmFsdWUpID49IHRoaXMubW9vZExpbWl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuZ2V0Q29tcG9uZW50KFwiR2FtZVwiKS5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==