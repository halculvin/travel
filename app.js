let express = require('express');
let app = express();

// All static files are stored in the public folder
app.use(express.static('public'))




app.listen(3000, () => console.log('Listening 3000...'));