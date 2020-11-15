const express = require('express')
const chalk = require('chalk')
const { v4: uuid } = require('uuid')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const updateComment = (updatedComment, field) => {
  console.log(comments)
  const comment = comments[updatedComment.postId].filter(el => el.id === updatedComment.id)
  comment[field] = updatedComment[field]
  comments[updatedComment.postId] = comment
  console.log(comments)
}

const comments = {}

const app = express()

const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())

app.get('/posts/:id/comments', (req, res) => {
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

app.post('/posts/:id/comments', async (req, res) => {

  if (req.body.status === 'COMMENT_MODERATED') {
    updateComment(req.body.payload, 'status')

    return axios.post('http://localhost:4500/events', {
      type: 'COMMENT_UPDATED',
      payload: req.body.payload
    })
  }
  const postId = req.params.id
  const id = uuid()
  const { text } = req.body

  const comment = {
    id,
    text,
    status: 'pending'
  }

  if (!comments[postId]) {
    comments[postId] = [comment]
  } else {
    comments[postId].push(comment)
  }

  await axios.post('http://localhost:4500/events', {
    type: 'COMMENT_CREATED',
    payload: {
      ...comment,
      postId
    }
  })

  res.status(201).json({
    "status": "success",
    "records": comment
  })
})

app.post('/events', (req, res) => {
  res.status(201).json({
    status: 'success'
  })
})

app.listen(PORT, () => {
  console.log(chalk.magenta.bold.inverse(`Comments microservice is running on port ${PORT}`))
})