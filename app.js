const express = require('express')
const userRouter = require('./routers/user')
const itemRouter =require('./routers/item')
const cartRouter = require('./routers/cart')
require('./db/mongoose')


const port = process.env.PORT

const app = express()

path = require('path')
const router = express.Router()

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)
app.use(cartRouter)

app.use(express.static(__dirname + '/views'));




app.listen(port, () => {
    console.log('server listening on port ' + port)
})
//assuming app is express Object.
// app.get('/',function(req,res) {
//     res.sendFile('index.html');
//   });
