const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'This codes is coded from Codespace!'
  })
})

app.listen(process.env.PORT || 8080, function() {
  console.log('listen on port:', this.address().port)
})
