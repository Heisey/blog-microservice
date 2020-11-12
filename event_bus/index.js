const express = require('express')
const chalk = require('chalk')

const app = express()


const PORT = process.env.PORT || 4500

app.listen(PORT, () => {
  console.log(chalk.blue.bold.inverse(`Event Bus micorservice is running on port ${PORT}`))
})