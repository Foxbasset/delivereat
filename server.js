const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.set('/static'       );
//app.get


app.get('/menu', function(req, res) {
app.send('hello world');
});















app.listen(8080, function() { // Set app to listen for requests on port 3000
  console.log('Listening on port 8080!'); // Output message to indicate server is listening
});
