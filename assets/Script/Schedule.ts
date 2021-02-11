import Task from './Task';
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass('Schedule')
export default class Schedule {
    @property(cc.Integer)
    duration = 0;

    @property(cc.Integer)
    startTime = 0;

    @property(cc.Integer)
    startMood = 0;

    @property(cc.Integer)
    moodLimit = 100;

    @property(cc.Float)
    timeSpeed = 10.0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {}

    // update (dt) {}
}
