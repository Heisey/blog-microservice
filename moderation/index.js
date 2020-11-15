const express = require('express')
const chalk = require('chalk')
const axios = require('axios')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5500

const app = express()

app.use(bodyParser.json())

app.post('/events',  (req, res) => {
  const { type, payload } = req.body

  switch(type) {

    case 'COMMENT_CREATED':
      const status = payload.text.includes('orange') ? 'rejected' : 'approved'
      return axios.post('http://localhost:4500/events', {
        type: 'COMMENT_MODERATED',
        payload: {
          ...payload,
          status
        }
      })

    default:
      return
  }
})

app.listen(PORT, () => {
  console.log(chalk.bold.inverse.red(`Moderation microservice is running on port ${PORT}`))
})