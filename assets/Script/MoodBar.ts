// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MoodBar extends cc.Component {

    @property(cc.Node)
    positiveIcon: cc.Node = null;

    @property(cc.Node)
    negativeIcon: cc.Node = null;

    @property(cc.Node)
    mutualIcon: cc.Node = null;

    @property(cc.Node)
    positiveMoodBar: cc.Node = null;

    @property(cc.Node)
    negativeMoodBar: cc.Node = null;

    @property(cc.Float)
    currentMoodValue = 0;

    @property(cc.Float)
    targetMoodValue = 0;

    @property(cc.Float)
    moodLimit = 100;

    @property(cc.Node)
    game = null;

    @property(cc.Float)
    incrementSpeed = 15;

    setCurrentMoodValue(newValue: number) {
        this.currentMoodValue = newValue;
    }

    setTargetMoodValue(newValue: number) {
        this.targetMoodValue = newValue;
    }

    setMoodLimit(newValue: number) {
        this.moodLimit = newValue;
    }

    addMoodValue(deltaValue: number) {
        this.targetMoodValue += deltaValue;
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad () {this.node.cascadeOpacity = false;}

    start () {

    }

    update (dt) {
        if (this.currentMoodValue < this.targetMoodValue) {
            this.currentMoodValue = Math.min(this.targetMoodValue, this.currentMoodValue+this.incrementSpeed * dt);
        } else if (this.currentMoodValue > this.targetMoodValue) {
            this.currentMoodValue = Math.max(this.targetMoodValue, this.currentMoodValue-this.incrementSpeed * dt);
        }

        if (this.currentMoodValue >= 0) {
            // Show positiveIcon and positive mood bar
            this.negativeMoodBar.width = 0;
            this.positiveMoodBar.width = Math.min(1, Math.abs(this.currentMoodValue)/this.moodLimit) * this.node.width / 2;
            this.positiveMoodBar.active = true;

            this.negativeIcon.active = false;

            if (this.currentMoodValue == 0) {
                this.positiveIcon.active = false;
                this.mutualIcon.active = true;
            } else {
                this.mutualIcon.active = false;
                this.positiveIcon.active = true;
                this.positiveIcon.setPosition(Math.min(1, Math.abs(this.currentMoodValue)/this.moodLimit) * this.node.width / 2, 0);
            }
        } else {
            // Show negativeIcon and negative mood bar
            this.positiveMoodBar.width = 0;
            this.negativeMoodBar.width = Math.min(1, Math.abs(this.currentMoodValue)/this.moodLimit) * this.node.width / 2;
            this.negativeMoodBar.active = true;

            this.positiveIcon.active = false;
            this.mutualIcon.active = false;
            this.negativeIcon.active = true
            this.negativeIcon.setPosition(Math.max(-1, - Math.abs(this.currentMoodValue)/this.moodLimit) * this.node.width / 2, 0);

            if (Math.abs(this.currentMoodValue) >= this.moodLimit) {
                this.game.getComponent("Game").gameOver();
            }
        }
    }
}
