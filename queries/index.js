const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const chalk = require('chalk')

const PORT = process.env.PORT || 5000

const postsData = {}

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.status(200).json({
    status: 'success',
    records: postsData
  })
})

app.post('/events', (req, res) => {

  const {type, payload} = req.body

  switch(type) {
    case 'POST_CREATED':
      const post = {
        id: payload.id,
        title: payload.title,
        comments: []
      }
      postsData[payload.id] = post
      return res.status(200).json({
        status: 'success'
      })

    case 'COMMENT_CREATED':
      const comment = {
        id: payload.id,
        text: payload.text
      }
      postsData[payload.postId].comments.push(comment)
      return res.status(200).json({
        status: 'success'
      })

    default:
      return res.status(200).json({
        status: 'failed'
      })
  }
})

app.listen(PORT, () => {
  console.log(chalk.yellow.bold.inverse(`Queries micorservice is running on port ${PORT}`))
})