const express = require('express');
const app = express();
const port = 3001;
const { router } = require('./Router');
app.use('/v1', router);
require('./configDatabase');
app.listen(port, () => console.log(`app is listening to ${port}`))