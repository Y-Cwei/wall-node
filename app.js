const express = require('express')
const path = require('path')

const app = express()

const tabBarRouter = require('./routes/tabbar/tabBarRouter')
const homeRouter = require('./routes/home/homeRouter')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))

app.use(tabBarRouter).use(homeRouter)

app.listen(3000, () => {
  console.log('Server started at http://127.0.0.1:3000')
})
