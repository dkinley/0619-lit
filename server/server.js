const express = require ('express');
const app = express ();
const cors = require('cors'); //npm install cors in server directory, this is cross origin allowing commu
const port = 8000;

app.use(express.json());
app.use(express.urlencoded( { extended : true} ) );
app.use(cors()); //add this too

// setup mongodb
// this require statement is like copying and pasting the code from that file right here!
require('./config/mongoose.config');

// setup routes
require('./routes/lit.routes')(app);

app.listen(port, () => console.log("Listening on port:  " + port));