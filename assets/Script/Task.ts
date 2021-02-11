// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;


@ccclass('task')
export default class Task {
    @property(cc.String)
    text = '';

    @property(cc.Integer)
    duration = 0;

    @property(cc.Integer)
    moodEffect = 0;
    
    @property(cc.String)
    triggerFailureString? = '';

    // If fixed time >= 0, it will be fixed in schedule bar at position fixedTime / RESOLUTION
    @property(cc.Integer)
    fixedTime = -1;
}

