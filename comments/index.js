const express = require('express')
const chalk = require('chalk')
const { v4: uuid } = require('uuid')
const bodyParser = require('body-parser')
const cors = require('cors')

const comments = {}

const app = express()

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())

app.get('/posts/:id/comments', (req, res) => {
  console.log('puppies')
  const postId = req.params.id

  if (!comments[postId]) {
    return res.status(404).json({
      "status": "failed"
    })
  }

  res.status(201).json({
    "status": "success",
    "records": comments[postId]
  })
})

app.post('/posts/:id/comments', (req, res) => {
  console.log('puppies')
  const postId = req.params.id
  const id = uuid()
  const { text } = req.body

  const comment = {
    id,
    text
  }

  if (!comments[postId]) {
    comments[postId] = [comment]
  } else {
    comments[postId].push(comment)
  }

  res.status(201).json({
    "status": "success",
    "records": comment
  })
})

app.listen(PORT, () => {
  console.log(chalk.blue.bold.inverse(`Comments microservice is running on port ${PORT}`))
})