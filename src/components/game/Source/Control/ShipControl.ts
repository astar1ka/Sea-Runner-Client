import Ship from "../Entites/Ship";

export default class ShipControl{
    private scene;
    private ship;
    private stop;
    private speedUp;
    private speedDown;
    private rotateClock;
    private rotateAntiClock;
    private leftSnipe;
    private rightSnipe;
    private attack;

    constructor(ship: Ship){
        this.scene = ship.scene;
        this.ship = ship;
        this.stop = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.speedUp = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.speedDown = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.rotateClock = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.rotateAntiClock = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.leftSnipe = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.rightSnipe = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.attack = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    off(){
        this.stop.removeAllListeners();
        this.speedUp.removeAllListeners();
        this.speedDown.removeAllListeners();
        this.rotateClock.removeAllListeners();
        this.rotateAntiClock.removeAllListeners();
    }

    on(){
        this.speedUp.on('down', () => {
            this.ship.setSpeed(1);
        })
        this.stop.on('down', () => {
            this.ship.setSpeed(0);
        })
        this.rotateClock.on('down', () => {
            this.ship.turn(false);
        })
        this.rotateAntiClock.on('down', () => {
            this.ship.turn(true);
        })
    }
}