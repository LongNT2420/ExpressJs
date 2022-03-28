const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
var exphbs  = require('express-handlebars');
const port = 3000
const route = require('./routers')
// static file
app.use(express.static(path.join(__dirname,'public')))

// Midleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// loger HTTP

// app.use(morgan('combined'));

// Rendering engine setup
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
})); // define extra name handlebars or hbs for short
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
console.log(path.join(__dirname, '/resources/views'));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// routes
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})