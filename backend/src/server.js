const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const businessRouter = require('./routes/mergeMarket');

dotenv.config();
const app = express();

connectDB();

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

app.get('/', (req, res) => res.send("MergeMArket API is running..."));
app.use('/api/')