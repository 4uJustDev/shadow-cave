import * as THREE from 'three';

export class Map {
    public mesh: THREE.Mesh;
    public rampMesh: THREE.Mesh;

    constructor(scene: THREE.Scene) {
        const mapWidth = 20;
        const mapHeight = 20;
        const mapGeometry = new THREE.PlaneGeometry(mapWidth, mapHeight);
        const mapMaterial = new THREE.MeshPhongMaterial({
            color: 0x00ff00,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(mapGeometry, mapMaterial);
        this.mesh.rotation.x = Math.PI / 2;
        scene.add(this.mesh);

        const rampWidth = 10;
        const rampHeight = 5;
        const rampGeometry = new THREE.BoxGeometry(rampWidth, 1, rampHeight);
        const rampMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
        this.rampMesh = new THREE.Mesh(rampGeometry, rampMaterial);

        this.rampMesh.position.set(0, 1, mapHeight / 2 - 2);
        this.rampMesh.rotation.x = -Math.PI / 6;
        scene.add(this.rampMesh);
    }
}
