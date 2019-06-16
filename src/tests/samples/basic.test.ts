jest.mock("../../route-boiler/utils/helper", () => ({
    ...jest.requireActual("../../route-boiler/utils/helper"),
    logRoute: () => jest.fn()
}))

import * as supertest from "supertest"
import basicApp from "../../samples/basic"

describe(`sample: basic scenario`, () => {
    let server: supertest.SuperTest<supertest.Test>

    beforeAll(async done => {
        const app = await basicApp()

        server = supertest(app)
        done()
    })

    it(`should GET /basic route`, async done => {
        server.get("/basic").expect(200, err => {
            done(err)
        })
    })

    it(`should GET /default route`, async done => {
        server.get("/default").expect(200, err => {
            done(err)
        })
    })

    it(`should POST /basic route`, async done => {
        server.post("/basic").expect(200, err => {
            done(err)
        })
    })
})
