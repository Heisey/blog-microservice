const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const chalk = require('chalk')
const { v4: uuid } = require('uuid')

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

app.post('/posts', (req, res) => {
  // console.log('puppies')
  const id = uuid()
  // console.log(req.body)

  const { title } = req.body

  const post = {
    id,
    title
  }

  Posts[id] = post

  res.status(201).json({
    "status": "success",
    "records": post
  })
})

app.listen(PORT, () => {
  console.log(chalk.bold.blue.inverse(`Post micorservice is running on ${PORT}`))
})