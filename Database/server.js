const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const databaseName = 'Eventmgmt';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.use('/api', router);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});