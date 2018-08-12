// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/'));

// app.get('/*', function(req,res) {
    
// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);testing


'use strict'
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./routes');
const port = process.env.PORT || 5001;
//set in heroku config vars
// const profile = process.env.PROFILE || "localhost";

let app = express();
//enable cors for localhost
// if(profile !== 'dev') {
//   app.use(cors());
// }
app.use(bodyParser.json());
router(app);

app.use(express.static(path.resolve(__dirname, '../ui/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../ui/dist', 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is live at port: ${port}`);
});