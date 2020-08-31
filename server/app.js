const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const router = require('./router')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(PORT, () => {
    console.log(`server ecommerce nextjs running on port ${PORT}`)
})