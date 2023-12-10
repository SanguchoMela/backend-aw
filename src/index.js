// Creacion de un web server en express

// Invocar la lirería express
const express = require('express')   // common js
// const {engine} = require('express-handlebars')  // common js

// // import { engine } from 'express-handlebars';    //es modules

// // Crear una instancia
const app = express()

// // Uso de request
// // Mandar informacion en formato JSON
// app.use(express.json())

// ------------------------------------------------------------------------

// app.get('/hamburguesa/simple',(req,res)=>{
//     res.send("Hamburguesa - simple")
// })

// // console.log(__dirname)  //pack completo de ruta

// app.get('/hamburguesa/doble',(req,res)=>{
//     res.sendFile('./hDoble.jpg',{
//         root:__dirname
//     })
// })
// app.get('/hamburguesa/triple',(req,res)=>{
//     res.sendFile('./hTriple.docx',{
//         root:__dirname
//     })
// })
// app.get('/hamburguesa/mixta',(req,res)=>{
//     res.status(201).json({
//         "tipo":"mixta",
//         "extra":"no"
//     })
// })

// // Utilizar un motor de plantillas
// app.engine('handlebars', engine());
// // Extensión de las páginas
// app.set('view engine', 'handlebars');

// // Ubicacion del directorio views
// // const ruta = path.join(__dirname,"views")    // si no funciona la ruta, necesario instalar path
// app.set('views', './src/views');


// app.get('/hamburguesa/vegana',(req,res)=>{
//     res.render('home')
// })
// app.get('/hamburguesa/contacts',(req,res)=>{
//     res.render('contacts')
// })
// app.get('/hamburguesa/about',(req,res)=>{
//     res.render('about')
// })

// app.get('/search',(req,res)=>{
//     // console.log(req.query)
//     if (req.query.tipo === "doble"){
//         res.send("Hamburguesa doble")
//     }
//     else {
//         res.send("Otro tipo de hamburguesa")
//     }
// })


// app.get('/pedido/:tipo',(req,res)=>{    // Variable tipo almacena lo que el usuario pida
//     // console.log(req.params)
//     res.send(`El pedido es hamburguesa ${req.params.tipo}`)
// })


// app.post('/register',(req,res)=>{
//     const {email,password} = req.body // Desestructuracion
//     res.send(`Mi email es: ${email} y mi password es: ${password}`)
// })


// app.get('/',(req,res)=>{
//     res.send("Bienvenidos")
// })

// app.get('/dashboard',(req,res)=>{
//     res.send("Dashboard Principal")
// })

// // Siempre debe estar al último
// app.use((req,res)=>{
//     res.send("404 - Not Found")
// })


// -----------------------------------------------------------------------------------
// Rutas públicas y privadas

// // Arriba del middleware van todas las rutas públicas
// app.get('/consumo',(req,res)=>{
//     res.send("Bienvenido - Consumo")
// })

// // Crear un middleware -- siempre arriba de las rutas que se quiere proteger
// app.use((req,res,next)=>{
//     const {email,password} = req.body
//     if(email === "melany01-03@hotmail.com" && password === "1234"){
//         next()
//     } 
//     else{
//         res.send("Usuario no registrado")
//     }
// })

app.get('/',(req,res)=>{
    res.send(`Landing page`)
})
app.get('/about',(req,res)=>{
    res.send("Sobre nosotros")
})



// Iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web server ejecutandose en el puerto 3000")