import GameState from "./gamestate";

export default class GameOverState extends GameState
{
    onStart(args:Array<any>)
    {
        super.onStart(args);

        this.view.lbStatus.string = "GAME IS OVER";

        this.view.getComponent(cc.Animation).play('gameover').wrapMode = cc.WrapMode.Normal;
        this.view.warrior.getComponent(cc.Animation).play('idle');
    }

    onReleaseResources()
    {
        this.view.getComponent(cc.Animation).play('gameover').wrapMode = cc.WrapMode.Reverse;
    }
}
