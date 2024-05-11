const express = require('express')
const cors = require('cors')
const multer = require('multer')
const MongoClient = require('mongodb').MongoClient;

const app = express()
app.use(cors())
app.use(express.json()) // Parse JSON request body
app.use(express.urlencoded({ extended: true }))

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
  console.assert(err == null, 'connection error:');
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // your routes and middleware here

  app.listen(8081, () => {
    console.log('Server is running on port 8081')
  })
});