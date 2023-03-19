import Entity from "./Entity";
import { Scene } from "phaser";

export default class Ship extends Entity{
    private speed:number = 0;
    private direction:number = 0;
    private turnNumber: number = 0;
    private turnCooldown: number = 300;
    private canTurn: boolean = true;
    constructor(scene: Scene, x: number, y: number, texture: string){
        super(scene, x, y, texture);
        this.setDisplaySize(128,128);
        this.addToDisplayList();
        this.scene.physics.add.existing(this);
    }

    public move():void{
        this.x += this.speed * Math.cos(this.direction);
        this.y += this.speed * Math.sin(this.direction);
    }

    public setSpeed(speedValue: number):void {
        this.speed = speedValue;
    }

    public turn(overClock: boolean = false):void{
        if (this.canTurn) {
            this.direction += (overClock) ? -0.2 : 0.2;
            this.turnNumber += (overClock) ? 1 : -1;
            if (this.turnNumber == -1) this.turnNumber = 31;
            else if (this.turnNumber == 32) this.turnNumber = 0;
            this.setFrame(this.turnNumber);
            if (Math.abs(this.direction) > 3.14) this.direction = -this.direction;
            this.canTurn = false;
            setTimeout(()=> this.canTurn = true, this.turnCooldown);
        }
    }
}