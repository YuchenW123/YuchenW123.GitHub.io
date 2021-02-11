
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/FastForward');
require('./assets/Script/Game');
require('./assets/Script/MoodBar');
require('./assets/Script/Schedule');
require('./assets/Script/ScheduleBar');
require('./assets/Script/Task');
require('./assets/Script/TaskItem');
require('./assets/Script/TaskItemAreaLayout');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Task.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFJMUM7SUFBQTtRQUVJLFNBQUksR0FBRyxFQUFFLENBQUM7UUFHVixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUdmLHlCQUFvQixHQUFJLEVBQUUsQ0FBQztRQUUzQiwwRkFBMEY7UUFFMUYsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFkRztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NDQUNWO0lBR1Y7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswQ0FDUjtJQUdiO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQ047SUFHZjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNPO0lBSTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkNBQ047SUFmRSxJQUFJO1FBRHhCLE9BQU8sQ0FBQyxNQUFNLENBQUM7T0FDSyxJQUFJLENBZ0J4QjtJQUFELFdBQUM7Q0FoQkQsQUFnQkMsSUFBQTtrQkFoQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzcygndGFzaycpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgQHByb3BlcnR5KGNjLlN0cmluZylcclxuICAgIHRleHQgPSAnJztcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIGR1cmF0aW9uID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIG1vb2RFZmZlY3QgPSAwO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuU3RyaW5nKVxyXG4gICAgdHJpZ2dlckZhaWx1cmVTdHJpbmc/ID0gJyc7XHJcblxyXG4gICAgLy8gSWYgZml4ZWQgdGltZSA+PSAwLCBpdCB3aWxsIGJlIGZpeGVkIGluIHNjaGVkdWxlIGJhciBhdCBwb3NpdGlvbiBmaXhlZFRpbWUgLyBSRVNPTFVUSU9OXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIGZpeGVkVGltZSA9IC0xO1xyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Schedule.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTY2hlZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7UUFFSSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR2IsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUdkLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFHZCxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsd0JBQXdCO1FBRXhCLGVBQWU7UUFFZixjQUFjO1FBRWQsaUJBQWlCO0lBQ3JCLENBQUM7SUFyQkc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDUjtJQUdiO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ1A7SUFHZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNQO0lBR2Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDTDtJQUdoQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNGO0lBZEEsUUFBUTtRQUQ1QixPQUFPLENBQUMsVUFBVSxDQUFDO09BQ0MsUUFBUSxDQXVCNUI7SUFBRCxlQUFDO0NBdkJELEFBdUJDLElBQUE7a0JBdkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcclxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcygnU2NoZWR1bGUnKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2hlZHVsZSB7XHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIGR1cmF0aW9uID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcclxuICAgIHN0YXJ0VGltZSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzdGFydE1vb2QgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgbW9vZExpbWl0ID0gMTAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdClcclxuICAgIHRpbWVTcGVlZCA9IDEwLjA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgLy8gc3RhcnQgKCkge31cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FastForward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ab6eXfk19Dr7kveyDuyg+2', 'FastForward');
// Script/FastForward.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.game = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype._toggleSpeed = function () {
        this.game.getComponent("Game").timeSpeed === 1 ? this.game.getComponent("Game").timeSpeed = 15 : this.game.getComponent("Game").timeSpeed = 1;
        if (this.node.parent.color.r == 255) {
            this.node.parent.color.set(cc.color(0x1B, 0xFF, 0x64));
        }
        else {
            this.node.parent.color.set(cc.color(255, 255, 255));
        }
    };
    NewClass.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () { return _this._toggleSpeed(); });
    };
    NewClass.prototype.onDestroy = function () {
        var _this = this;
        this.node.off(cc.Node.EventType.TOUCH_START, function () { return _this._toggleSpeed(); });
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "game", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGYXN0Rm9yd2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZCQztRQTFCRyxVQUFJLEdBQVksSUFBSSxDQUFDOztRQXlCckIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Qkcsd0JBQXdCO0lBRXhCLCtCQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2hKLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMzRDthQUFLO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCx3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQXZCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBSEosUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZCNUI7SUFBRCxlQUFDO0NBN0JELEFBNkJDLENBN0JxQyxFQUFFLENBQUMsU0FBUyxHQTZCakQ7a0JBN0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBfdG9nZ2xlU3BlZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmdldENvbXBvbmVudChcIkdhbWVcIikudGltZVNwZWVkID09PSAxID8gIHRoaXMuZ2FtZS5nZXRDb21wb25lbnQoXCJHYW1lXCIpLnRpbWVTcGVlZCA9IDE1IDogIHRoaXMuZ2FtZS5nZXRDb21wb25lbnQoXCJHYW1lXCIpLnRpbWVTcGVlZCA9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQuY29sb3IuciA9PSAyNTUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5jb2xvci5zZXQoIGNjLmNvbG9yKDB4MUIsIDB4RkYsIDB4NjQpKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuY29sb3Iuc2V0KGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHRoaXMuX3RvZ2dsZVNwZWVkKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4gdGhpcy5fdG9nZ2xlU3BlZWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TaskItemAreaLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3a7a4EofBK9LYWiCrXJzFL', 'TaskItemAreaLayout');
// Script/TaskItemAreaLayout.ts

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
var TaskItemAreaLayout = /** @class */ (function (_super) {
    __extends(TaskItemAreaLayout, _super);
    function TaskItemAreaLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskItemAreaLayout.prototype.rearrange = function () {
        // Clear layout when the game is ongoing
        // Note we should change the layout to HORIZONTAL when new children is added to the area
        this.node.getComponent(cc.Layout).type = cc.Layout.Type.GRID;
        this.node.getComponent(cc.Layout).updateLayout();
        this.node.getComponent(cc.Layout).type = cc.Layout.Type.NONE;
    };
    // LIFE-CYCLE CALLBACKS:
    TaskItemAreaLayout.prototype.onLoad = function () {
        this.rearrange();
    };
    TaskItemAreaLayout.prototype.start = function () {
        // Clear layout when the game is ongoing
        this.rearrange();
    };
    TaskItemAreaLayout = __decorate([
        ccclass
    ], TaskItemAreaLayout);
    return TaskItemAreaLayout;
}(cc.Component));
exports.default = TaskItemAreaLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUYXNrSXRlbUFyZWFMYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7O0lBdUJBLENBQUM7SUFyQkcsc0NBQVMsR0FBVDtRQUNJLHdDQUF3QztRQUN4Qyx3RkFBd0Y7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQW5CZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0F1QnRDO0lBQUQseUJBQUM7Q0F2QkQsQUF1QkMsQ0F2QitDLEVBQUUsQ0FBQyxTQUFTLEdBdUIzRDtrQkF2Qm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0l0ZW1BcmVhTGF5b3V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZWFycmFuZ2UoKSB7XHJcbiAgICAgICAgLy8gQ2xlYXIgbGF5b3V0IHdoZW4gdGhlIGdhbWUgaXMgb25nb2luZ1xyXG4gICAgICAgIC8vIE5vdGUgd2Ugc2hvdWxkIGNoYW5nZSB0aGUgbGF5b3V0IHRvIEhPUklaT05UQUwgd2hlbiBuZXcgY2hpbGRyZW4gaXMgYWRkZWQgdG8gdGhlIGFyZWFcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudHlwZSA9IGNjLkxheW91dC5UeXBlLkdSSUQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYXlvdXQpLnVwZGF0ZUxheW91dCgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS50eXBlID0gY2MuTGF5b3V0LlR5cGUuTk9ORTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucmVhcnJhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIENsZWFyIGxheW91dCB3aGVuIHRoZSBnYW1lIGlzIG9uZ29pbmdcclxuICAgICAgICB0aGlzLnJlYXJyYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHtcclxuICAgIC8vIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
