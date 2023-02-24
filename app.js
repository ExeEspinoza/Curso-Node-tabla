const {crearArchivo } = require('./helpers/multiplicar'); //desestructuración
var colors = require('colors')
const argv =require('./config/yargs');


console.clear();

console.log(argv)

crearArchivo( argv.b, argv.l )
    .then(nombreArchivo  => console.log(nombreArchivo, 'creado') )
    .catch(err => console.log(err) );


//const [, , arg3 = 'base=5' ] = process.argv;
//const [, base=5] = arg3.split('=')
//console.log(base);

//const base = 5;



//fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//    if (err) throw err;

//    console.log(`tabla-${ base }.txt creado`);
