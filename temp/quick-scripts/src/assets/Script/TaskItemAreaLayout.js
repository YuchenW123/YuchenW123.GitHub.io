"use strict";
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