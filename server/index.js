const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router');
require('./db.connect');
app.use(bodyParser.json());
app.use(express.static('public/chat'));
app.use('/api',router);
app.use(cors());
app.use(cookieParser());
const liveChat = require('./socket');
const port = process.env.PORT || 5000;
const server = app.listen(port,()=>console.log('server is running...'));
liveChat(server);
