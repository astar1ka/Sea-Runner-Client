import WorldScene from "./Scenes/WorldScene";
//import './Game.css';

export default function Game(props: any){
    const Server = props.server;
    const setState = props.setState;

    let scene = new WorldScene('WorldScene');
        const config = {
            type: Phaser.AUTO,
            width: '100%', 
            height: '100%',
            parent: 'game',
            fps: {
                target: 60,
                forceSetTimeOut: false
            },
            render: {
                pixelArt: false,
                clearBeforeRender: false
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 }
                }
            },
            scene: [
                scene
            ]
        };
        
        const game = new Phaser.Game(config);

    return(<div id="game"/>);
}