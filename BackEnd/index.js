const express = require('express');
const app = express();
const port = 3001;
var path = require('path');
require('./configDatabase');
const { router } = require('./Router');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/v1', router);
app.listen(port, () => console.log(`app is listening to ${port}`))