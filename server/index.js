require('dotenv').config()
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();

app.use(express.json());

massive({connectionString: 'postgres://whddmqgsixspmm:c9cf093edc58717faf86fb25e6c881520a3711be1103dd64b1c8053b845f2f89@ec2-52-200-48-116.compute-1.amazonaws.com:5432/d45c0ia34stn13', ssl: {rejectUnauthorized: false}})
