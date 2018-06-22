let express = require('express');

// Application setup
let app = express();
let serv = app.listen(3000, () => { console.log('The server is started on port 3000') });

// App static files
app.use(express.static('html'));