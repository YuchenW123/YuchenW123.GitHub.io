// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    game: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    _toggleSpeed() {
        this.game.getComponent("Game").timeSpeed === 1 ?  this.game.getComponent("Game").timeSpeed = 15 :  this.game.getComponent("Game").timeSpeed = 1;
        if (this.node.parent.color.r == 255) {
            this.node.parent.color.set( cc.color(0x1B, 0xFF, 0x64));
        }else {
            this.node.parent.color.set(cc.color(255, 255, 255));
        }
    }

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, () => this._toggleSpeed());
    }

    onDestroy () {
        this.node.off(cc.Node.EventType.TOUCH_START, () => this._toggleSpeed());
    }

    start () {

    }

    // update (dt) {}
}
