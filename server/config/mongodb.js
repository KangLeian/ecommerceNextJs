const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})

client.connect()

const db = client.db(`ecommnextjs`)

module.exports = db