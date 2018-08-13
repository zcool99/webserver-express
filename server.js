const express = require('express');
const app = express();
const hbs = require('hbs');



require('./hbs/helpers');

const port = process.env.PORT || 3000;

//Permite dar a la carpeta y su contenido opcion de ser publica
app.use(express.static( __dirname+ '/public' ));

//Express hbs engine
hbs.registerPartials( __dirname + '/views/partials/' );

app.set('view engine', 'hbs');


//Declarar  ruta del path
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Omar Hdez',
        anio: new Date().getUTCFullYear()
    });


}); 

 app.get('/about', function (req, res) {
     res.render('about', {
         anio: new Date().getUTCFullYear()
     });
 });





app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});


