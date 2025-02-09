import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Player {
    public model: THREE.Object3D;
    private cameraRig: THREE.Object3D;
    private moveSpeed: number;
    private keys: { [key: string]: boolean };

    constructor(scene: THREE.Scene) {
        this.model = new THREE.Object3D();
        this.cameraRig = new THREE.Object3D();
        this.moveSpeed = 0.1;
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false,
        };

        this.loadModel(scene);
        this.setupControls();
    }

    private loadModel(scene: THREE.Scene) {
        const loader = new GLTFLoader();
        loader.load('models/firstPerson.glb', (gltf) => {
            this.model = gltf.scene;
            this.model.position.set(0, 0, 0);
            scene.add(this.model);

            this.cameraRig.position.copy(this.model.position);
            this.cameraRig.position.y += 5;
            this.cameraRig.position.z -= 10;
            scene.add(this.cameraRig);
        });
    }

    private setupControls() {
        window.addEventListener('keydown', (event) => {
            if (event.key in this.keys) {
                this.keys[event.key] = true;
            }
        });

        window.addEventListener('keyup', (event) => {
            if (event.key in this.keys) {
                this.keys[event.key] = false;
            }
        });
    }

    public update() {
        if (this.keys.w) {
            this.model.position.z -= this.moveSpeed;
        }
        if (this.keys.s) {
            this.model.position.z += this.moveSpeed;
        }

        if (this.keys.a) {
            this.model.position.x -= this.moveSpeed;
        }
        if (this.keys.d) {
            this.model.position.x += this.moveSpeed;
        }

        this.cameraRig.position.copy(this.model.position);
        this.cameraRig.position.y += 5;
        this.cameraRig.position.z -= 10;
    }
}
