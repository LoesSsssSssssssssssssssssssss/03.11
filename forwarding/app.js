const express = require('express')
const app = express()

app.use('/index', function (request, response) {
  response.redirect('https://xsltdev.ru')
})

app.use('/home', function (request, response) {
  response.redirect(301, 'about')
})
app.use('/about', function (request, response) {
  response.send('<h1>About</h1>')
})

app.listen(3000)
