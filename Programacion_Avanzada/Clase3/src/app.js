import express from 'express';
import mongoose from 'mongoose';
import CompanyModel from './models/Company';

/**
 * npm init --yes (Crear proyecto rápidamente)
 npm install (i) permite la instalación de dependencias en el proyecto
 Express-> (framework de nodeJS) Permite la creación de API's Rest con node js

 API
 -servidor
 - Crear endpoints con sus respectivos métodos de consulta
 - Dar respuesta al servidor
 */

// const express = require('express'); //Importar la biblioteca
const app = express();

//midlewards
app.use(express.json());

//Endpoint
//localhost://3000/users
app.get('/users', (request, response) => {
    response.send("Welcome back");
    console.log(request.query);
});

//Listen
app.listen(3000, async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Programacion', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('si');
    }
    catch (e) {
        console.log("error")
    }
    console.log("port: 3000")
})

// app.get('/test', (request, response)=> {
//     response.send('Hello World, this is a test');
// });

// app.post('/register', (request, response)=> {
//     console.log(request.body);
//     response.send('You are registered')
// })

// app.put('/updateUser', (request, response)=> {
//     console.log(request.body);
//     response.send('Data has been updated')
// })

// app.delete('/deleteUser', (request, response)=> {
//     console.log(request.body);
//     response.send('Data has been deleted')
// })




