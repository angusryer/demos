const express = require('express');
const bodyParser = require('body-parser');
// body-parser is middleware. It intercepts requests coming in from external sources
// and does something with those requests BEFORE the actual HTTP verb is processed (ie.
// "app.get()"). body-parser in particular is NOT needed unless you need to make the
// body of the request available to the functions you define here (most often in your
// app.post() )

const app = express();
// Invoke the first method in the express package (ie, the file containing the express
// functions), and assign its return to the "app" variable. It needs to be invoked
// because invocation causes functions and classes to receive a context (think of "this")
// In this case, we want the context of the server code we're writing to be available
// to the handy internals of express.

const events = require('./modules/holidays.json');
// Super easy way of making data defined in a separate file available within THIS file

// events.map() // <<<< Notice that you can call array methods now (look at the file
// holidays.json)

// console.log(events); // <<<< YAY, it looks like the data we defined in the file, but
// javascript OBJECT form

app.use(bodyParser.json()); // This invokes the JSON parser methods in our body-parser
// package (whcimakes the JSON parsing methods from our body-parser
// package 

app.get('/holidays', (_req, res) => {
    res.send('')
})

app.post('/holidays', (req, res) => {
    res.push()
})


app.listen(8085, () => console.log('Running on port 8085'))