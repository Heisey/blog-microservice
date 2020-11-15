const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 4500

app.post('/events', (req, res) => {
  const event = req.body

  axios.post('http://localhost:3500/events', event) // ~~ Post service
  axios.post('http://localhost:4000/events', event) // ~~ Comments service
  axios.post('http://localhost:5000/events', event) // ~~ Query service
  axios.post('http://localhost:5500/events', event) // ~~ Moderation service

  res.status(200).json({
    status: 'success'
  })
})

app.listen(PORT, () => {
  console.log(chalk.cyan.bold.inverse(`Event Bus micorservice is running on port ${PORT}`))
})