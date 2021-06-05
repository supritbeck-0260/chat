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
const server = app.listen(5000,()=>console.log('server is running...'));
liveChat(server);
