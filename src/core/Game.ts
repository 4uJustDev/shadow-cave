import { SceneManager } from './SceneManager';
import { Player } from '../objects/Player';
import { Map } from '../objects/Map';

export class Game {
    private sceneManager: SceneManager;
    private player: Player;
    private map: Map;

    constructor() {
        this.sceneManager = new SceneManager();
        this.player = new Player(this.sceneManager.scene);
        this.map = new Map(this.sceneManager.scene);
    }

    start() {
        const animate = () => {
            requestAnimationFrame(animate);

            this.player.update();

            this.sceneManager.render();
        };

        animate();
    }
}
