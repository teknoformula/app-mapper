//back-end server.js

// server.js

const express = require('express');
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const projectRoutes = require('./controllers/project.route')

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//import routes
app.use('/project', projectRoutes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
