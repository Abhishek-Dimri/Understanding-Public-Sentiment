const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });



connectDB();
const app = express();

app.use(express.json());

app.use(cors());


app.use('/auth', require('./routes/authRoutes'));
app.use('/sentiment', require('./routes/sentimentRoutes'));
app.use('/upload', require('./routes/uploadRoutes'));

app.listen(5000, () => console.log('Server running on port 5000'));
