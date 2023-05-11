//import
const express = require('express')

//invoking
const app = express()

//middleware
app.use(express.static(`${__dirname}/public`)); //=>dirname brings working directory file index.html


//confirmation
app.listen(4000, () => console.log('server running on 4000'))

