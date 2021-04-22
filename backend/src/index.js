const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const needHelp = require('./NeedHelp')
const volunteer = require('./Volunteer')
const needy = require('./NeedyEx')

app.use(cors())
app.use(express.json())

app.get('/needHelp', (req, res) => {
    res.send(needHelp.get())
})

app.post('/needHelp', (req, res) => {
    res.send(needHelp.post(req, req.body.name, req.body.surname, req.body.phoneNumber, req.body.address, req.body.reason))
})

app.get('/volunteer', (req, res) => {
    res.send(volunteer.getVolunteer())
})

app.post('/volunteer', (req, res) => {
    res.send(volunteer.postVolunteer(req, req.body.name, req.body.surname, req.body.phoneNumber, req.body.dateOfBirth, req.body.reason))
})

app.get('/needy', (req, res) => {
    res.send(needy.getNeedy())
})

app.post('/needy', (req, res) => {
    res.send(needy.postNeedy(req, req.body.name, req.body.surname, req.body.phoneNumber, req.body.reason))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
