const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const chalk = require('chalk')
const { v4: uuid } = require('uuid')
const axios = require('axios')

const Posts = {}

const app = express()

const PORT = process.env.PORT || 3500

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.status(200).json({
    "status": "success",
    "records": Posts
  })
})

app.post('/posts', async (req, res) => {
  const id = uuid()

  const { title } = req.body

  const post = {
    id,
    title
  }

  Posts[id] = post

  await axios.post('http://localhost:4500/events', {
    type: 'POST_CREATED',
    payload: post
  })

  res.status(201).json({
    "status": "success",
    "records": post
  })
})

app.post('/events', (req, res) => {
  res.status(201).json({
    status: 'success'
  })
})

app.listen(PORT, () => {
  console.log(chalk.bold.blue.inverse(`Post micorservice is running on port ${PORT}`))
})