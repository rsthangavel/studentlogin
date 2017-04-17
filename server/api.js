/**
 * Created by thangavel on 17/4/17.
 */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');
var db = mongoose.connection;
router.get('/', (req, res) => {
  res.send('api works');
});
