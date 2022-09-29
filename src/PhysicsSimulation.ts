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

    constructor()
    {
        // The first line of any child class constructor must call
        // the base class's constructor using the super() method. 
        super();

        this.room = new Room(40, 15, 40);
    }

    createScene(): void 
    {
        // Setup camera
        this.camera.setPerspectiveCamera(60, 1920/1080, 0.01, 50)
        this.camera.position.set(0, 0, 15);
        this.camera.lookAt(gfx.Vector3.ZERO);

        // Add objects to the scene
        this.scene.add(this.room);
    }

    update(deltaTime: number): void 
    {

    }
}