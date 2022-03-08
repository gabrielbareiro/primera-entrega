const express = require('express');
const path = require('path');
const fs = require('fs');
const apiRoutes = require('./routers/index')

const app = espres();
const PORT = process.env.PORT || 8080;


//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Routes
app.use('/api', apiRoutes);


const connectedServer = app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
    console.log(error.message);
});