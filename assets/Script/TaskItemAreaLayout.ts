// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TaskItemAreaLayout extends cc.Component {

    rearrange() {
        // Clear layout when the game is ongoing
        // Note we should change the layout to HORIZONTAL when new children is added to the area
        this.node.getComponent(cc.Layout).type = cc.Layout.Type.GRID;
        this.node.getComponent(cc.Layout).updateLayout();
        this.node.getComponent(cc.Layout).type = cc.Layout.Type.NONE;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.rearrange();
    }

    start () {
        // Clear layout when the game is ongoing
        this.rearrange();
    }

    // update (dt) {
    // }
}
