const express = require('express');

const app = express();
const api = require('supertest');
const testApi = api(app);
// Invoke the first method in the express package (ie, the file containing the express
// functions), and assign its return to the "app" variable. It needs to be invoked
// because invocation causes functions and classes to receive a context (think of "this")
// In this case, we want the context of the server code we're writing to be available
// to the handy internals of express.

const API = 'http://localhost:8085'

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

})

app.listen(8085, () => console.log('Running on port 8085'))


test('GET should return an array of holidays', () => {
    testApi.get(API + "/holidays").end((err, res) => {
        expect(res.body).toEqual(events)
    })
})

test('POST should return with 400 when "event" param not provided', () => {})

test('PUT should return with 400 when "event" and "id" params not provided', () => {})

test('PUT should return with 404 when "id" param is not found', () => {})

test('DELETE should fail with 400 when "id" param in not found', () => {})