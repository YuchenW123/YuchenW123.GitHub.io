
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