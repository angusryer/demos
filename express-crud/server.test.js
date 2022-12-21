const express = require('express');
const app = express();
// Invoke the first method in the express package (ie, the file containing the express
// functions), and assign its return to the "app" variable. It needs to be invoked
// because invocation causes functions and classes to receive a context (think of "this")
// In this case, we want the context of the server code we're writing to be available
// to the handy internals of express.

/**
 * Returns middleware that only parses urlencoded bodies and only looks at requests
 * where the Content-Type header matches the type option
 */
app.use(express.urlencoded({ extended: true }))
app.use(express.json()); // This ensures that every request's JSON body will be formatted properly

// 'require' caches modules, so to account for file changes, we MAY want to make sure we clear
// that cache before attempting to require them again
// delete require.cache[require.resolve('./data/holidays.json')];

// Super easy way of making data defined in a separate file available within THIS file
const events = require('./data/holidays.json');

app.get('/holidays', (_req, res) => {
    res.status(200).send(events)
})

app.post('/holidays', (req, res) => {
    if (Object.keys(req.body).every(v => v !== "event")) {
        return res.status(400).send("Invalid parameter format. Must include 'event' parameter in request body.")
    }

    events.push({ id: (events.length + 1).toString(), event: req.body.event});
    return res.status(200).send(events)
})

app.put('/holidays', (req, res) => {
    if (Object.keys(req.body).some(v => !["event", "id"].includes(v))) {
        return res.status(400).send("Invalid parameter format. Must include 'id' and 'event' parameters in request body.")
    }

    let index = events.indexOf(ev => ev.id === req.body.id);
    if (index != -1) {
        events.splice(index, 1, req.body)
        return res.status(200).send(events)
    } else {
        return res.status(404).send("ID not found. ID: " + req.body.id)
    }
})

app.delete('/holidays', (req, res) => {
  if (Object.keys(req.body).every(v => v !== "id")) {
    return res.status(400).send("Invalid parameter format. Must include 'id' parameter in request body.")  
  }

  let index = events.indexOf(ev => ev.id === req.body.id);
  if (index != -1) {
      events.splice(index, 1)
      return res.status(200).send(events)
  } else {
      return res.status(404).send("ID not found. ID: " + req.body.id)
  }
})

if (process.env.ENV !== "test") {
  app.listen(8085, () => console.log('Running on port 8085'))
}



/**
 * Tests
 */

const testApi = require('supertest').agent(app)

const ENDPOINT = "/holidays"

describe("/holidays", () => {
  
  it('GET should return an array of holidays', async () => {
    const res = await testApi.get(ENDPOINT)
    expect(res.status).toBe(200);
    expect(res.body).toEqual(events);
  })
  
  it('POST should be successful when provided with data of type { event: string }', async () => {
    const res = await testApi.post(ENDPOINT).send({ event: "big event" })
    expect(res.status).toBe(200)
  })

  it('POST should return with 400 when "event" param not provided', async () => {
    const res = await testApi.post(ENDPOINT).send({ random: "data" })
    expect(res.status).toBe(400)
  })
  
  it('PUT should return with 400 when "event" and "id" params not provided', async () => {
    const res = await testApi.post(ENDPOINT).send({ random: "data" })
    expect(res.status).toBe(400)
  })
  
  it('PUT should return with 404 when "id" param is not found', async () => {
    const res = await testApi.put(ENDPOINT).send({ id: "5" })
    expect(res.status).toBe(404);
  })
  
  it('DELETE should fail with 404 when "id" param is not found', async () => {
    const res = await testApi.delete(ENDPOINT).send({ id: "5" })
    expect(res.status).toBe(404);
  })

  it('DELETE should return with 400 when "id" param not provided', async () => {
    const res = await testApi.delete(ENDPOINT).send({ random: "data" })
    expect(res.status).toBe(400)
  })

})