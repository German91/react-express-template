'use strict';

const Mongoose = require('mongoose');

// Connect to MongoDB
Mongoose.Promise = global.Promise;
Mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

let db = Mongoose.connection;

// Handle Errors
db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('close', () => {
  console.log('Error connecting to MongoDB');
});
