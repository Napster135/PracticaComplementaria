const express = require('express')
const productsRouter =  require ('./routers/productsRouter')
const viewsRouter = require('./routers/viewsRouter')

const mongoose = require('mongoose')
const handlebars = require ('express-handlebars')


const app  = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

const MONGODB_CONNECT ='mongodb+srv://victorpacheco119:F9RV4sMJLc71DrJF@cluster0.efm4av8.mongodb.net/Practicacomplementaria?retryWrites=true&w=majority '

mongoose.connect(MONGODB_CONNECT)
.then(()=>console.log('conexion DB'))
.catch((error) => console.log(error))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api/prodcuts', productsRouter)
app.use('/products', viewsRouter)


app.get('/', (req,res)=>{
    res.send('Hola Gente ..')
})

const PORT = 8080
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
