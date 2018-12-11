const express = require('express'),
    bodyParser = require('body-parser'),
    actions = require('./actions'),
    projects = require('./projects');

const app = express();

app
    .use(bodyParser.json())
    .use('/actions', actions)
    .use('/projects', projects);


app.listen(5000);