const express = require('express')
const app = express()
const scraper = require('./scraper')
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(express.static('client'))

app.post('/download', async (req, res) => {
    console.log(req.body)
    const dlLink = await scraper.scraper(req.body.postLink)
    console.log(dlLink)
    res.send(dlLink)
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
