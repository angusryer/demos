import express, { Application, Request, Response } from 'express'

export class Server {
    // make the server application available publicly for when we
    // actually instantiate this server object in index.ts
    public server: Application;
    private baseRoutes: BaseRoutes = new BaseRoutes()

    public async configureServer(): Promise<void> {
        this.server.use(express.json())
        this.server.use(express.urlencoded({ extended: true }))
    }

    constructor() {
        // instantiate the main server application
        this.server = express();
        // configure the instantiated server application
        this.configureServer();
        // configure routes
        this.baseRoutes.route(this.server)
    }
}

class BaseRoutes {
    public route(app: Application) {
        app.route('/')
            .get((_req: Request, res: Response) => {
                res.send({ message: "It works!" })
            })
    }
}

/**
 * Tests
 */
import { describe, it, expect, beforeAll, afterAll } from '@jest/globals'
import TestSpace, { SuperTest, Test } from 'supertest';

describe('BaseRoutes', () => {

    let testService: SuperTest<Test>; // we'll need this available throughout our tests
    beforeAll(() => {
        const app = new Server()
        app.configureServer();
        testService = TestSpace(app.server); // don't actually call the `listen()` function
    })

    afterAll(done => done()) // close any unhandled asyncs for good measure
    
    it('GET returns "It works!" successfully', async () => {
        const res = await testService.get('/')
        expect(res.body).toMatchObject({ message: 'It works!' })
    })
})