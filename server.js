const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./client/views"));

// Importing our apiRoute and htmlRoute
