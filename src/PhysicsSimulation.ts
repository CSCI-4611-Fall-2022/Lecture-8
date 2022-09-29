/* Lecture 8
 * CSCI 4611, Fall 2022, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'
import { Room } from './Room';

export class PhysicsSimulation extends gfx.GfxApp
{
    private room: Room;
    private cameraControls: gfx.FirstPersonControls;

    constructor()
    {
        // The first line of any child class constructor must call
        // the base class's constructor using the super() method. 
        super();

        this.room = new Room(40, 15, 40);
        this.cameraControls = new gfx.FirstPersonControls(this.camera);
    }

    createScene(): void 
    {
        // Setup camera
        this.camera.setPerspectiveCamera(60, 1920/1080, 0.01, 50)
        this.camera.position.set(0, 0, 15);
        this.camera.lookAt(gfx.Vector3.ZERO);

        // Create an ambient light
        const ambientLight = new gfx.AmbientLight(new gfx.Color(0.3, 0.3, 0.3));
        this.scene.add(ambientLight);

        // Create a directional light
        const directionalLight = new gfx.DirectionalLight(new gfx.Color(0.6, 0.6, 0.6));
        directionalLight.position.set(0, 2, 1);
        this.scene.add(directionalLight);

        // Create the room material
        const roomMaterial = new gfx.UnlitMaterial();
        roomMaterial.color.set(0.75, 0.75, 0.75);
        roomMaterial.texture = new gfx.Texture('./assets/holodeck.png');
        roomMaterial.side = gfx.Side.BACK;
        this.room.material = roomMaterial;
        this.room.tileTexture(2.5);

        this.scene.add(this.room);
    }

    update(deltaTime: number): void 
    {
       this.cameraControls.update(deltaTime);
    }
}