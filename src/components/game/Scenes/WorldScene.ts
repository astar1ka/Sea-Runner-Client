import Phaser from "phaser";
import tileMap from "../../../assets/tileMap.json"
import spriteMapSheet from '../../../../src/assets/spriteMap.webp'
import ship from "../../../../src/assets/ship.png"
import cannonball from "../../../assets/cannonBall.webp"
import explosion from "../../../assets/explosion.webp"
import Ship from "../Source/Entites/Ship/Ship";
import ShipControl from "../Source/Control/ShipControl";

export default class WorldScene extends Phaser.Scene{
    constructor(config:string){
        super(config)
    }

    preload():void{
        this.load.image('spriteMapSheet', spriteMapSheet);
        this.load.tilemapTiledJSON('sea', tileMap);
        this.load.spritesheet('ship',ship,{frameWidth:256,frameHeight:256});
        this.load.image('cannonball',cannonball);
        this.load.image('explosion',explosion);
    }

    create():void{
        const sand : any[] = [];
        const map = this.make.tilemap({ key: 'sea' });
        const tiles = map.addTilesetImage('sea', 'spriteMapSheet');
        const sea = map.createLayer('sea', tiles, 0, 0);
        map.setCollision([97,113,129,145,162,163,164,165,82,83,84,85,102,118,134,150],true);
        this.data.set('sea', sea);
        this.data.set('keyW',this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W))
        this.data.set('keyS',this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S))
        const player = new Ship(this,200,200, 'ship');
        const Control = new ShipControl(player);
        Control.on();
        this.physics.add.collider(player, sea, ()=>{console.log(123)});
        this.data.set('player', player);
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(2)
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.scale.displaySize.resize(1000);
        this.input.on('pointerdown', (pointer: {x:number, y: number}) => {
            console.log(sea.getTileAtWorldXY(pointer.x, pointer.y))
        })
    }

    update(time: number, delta: number): void {
        const player = this.data.get('player');
        const move = player.getData('move');
        const directionWind = -0.78;
        player.move();
        player.restore();
    }
}