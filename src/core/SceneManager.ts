import * as THREE from 'three';

export class SceneManager {
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public renderer: THREE.WebGLRenderer;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        this.renderer = new THREE.WebGLRenderer();

        this.setupScene();
    }

    private setupScene() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.camera.position.set(0, 10, 20);
        this.camera.lookAt(0, 0, 0);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(5, 10, 7).normalize();
        this.scene.add(light);
    }

    public render() {
        this.renderer.render(this.scene, this.camera);
    }
}
