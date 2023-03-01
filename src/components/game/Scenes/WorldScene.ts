import Phaser from "phaser";
import tileMap from "../../../assets/tileMap.json"
import spriteMapSheet from '../../../../src/assets/spriteMap.webp'
import ship from "../../../../src/assets/ship.png"
import Ship from "../Source/Entites/Ship";

export default class WorldScene extends Phaser.Scene{
    constructor(config:string){
        super(config)
    }

    preload():void{
        this.load.image('spriteMapSheet', spriteMapSheet);
        this.load.tilemapTiledJSON('sea', tileMap);
        this.load.spritesheet('ship',ship,{frameWidth:256,frameHeight:256});
    }

    create():void{
        console.log(spriteMapSheet);
        const sand : any[] = [];
        const map = this.make.tilemap({ key: 'sea' });
        const tiles = map.addTilesetImage('sea', 'spriteMapSheet');
        const sea = map.createLayer('sea', tiles, 0, 0);
        map.setCollision([97,113,129,145,162,163,164,165,82,83,84,85,102,118,134,150],true);
        this.data.set('sea', sea);
        this.data.set('keyW',this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W))
        this.data.set('keyS',this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S))
        const player = new Ship(this,200,200, 'ship');
        this.physics.add.collider(player, sea, ()=>{console.log(123)});
        console.log(player.body);
        this.data.set('player', player);
        this.cameras.main.startFollow(player);
        this.cameras.main.setZoom(3.5)
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.scale.displaySize.resize(1000);
        this.input.on('pointerdown', (pointer: {x:number, y: number}) => {
            console.log(sea.getTileAtWorldXY(pointer.x, pointer.y))
        })
    }

    update(time: number, delta: number): void {
        const player = this.data.get('player');
        const keyW = this.data.get('keyW');
        const keyS = this.data.get('keyS');
        const move = player.getData('move');
        const directionWind = -0.78;
        if (keyW.isDown || keyS.isDown){
            player.turn(keyW.isDown);
        }
        const x = player.x +(2*Math.cos(player.direction));
        const y = player.y + (2*Math.sin(player.direction));
        const tile = this.data.get('sea').getTileAtWorldXY(x, y);
        
        if (tile.index < 200 /*4,5,6,7,20,21,22,23,36,37,38,39,52,53,54,55,97,113,129,145,162,163,164,165,82,83,84,85,102,118,134,150*/){
            console.log(tile);
        }
        else {
            player.x=x;
            player.y=y;
        }
    }
}