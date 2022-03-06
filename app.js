
//Express App
const express = require('express');
const app = express();


//User Route
const userRoute = require('./routes/userRoute');

//Mongoose DB manager
const mongoose = require('mongoose');



// connect to mongodb
const dbURI = 'mongodb+srv://KEA:KEA123456789@node-server-db.akqbr.mongodb.net/Notebook?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then((result) => {
        console.log("connected to DB: ");
        app.listen(process.env.PORT || 7777, () => console.log("App listening on port 7777 or "+process.env.PORT));
    })
    .catch((err) => console.log(err));

    
//set view engine to ejs 
app.set('view engine','ejs');

//set a public folder, everything in folder are available from frontend
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));


app.get('/', (req,res) => {
    res.render('index', {title: 'Home'});
});
app.get('/express', (req,res) => {
    res.render('express', {title: 'Express'});
})
app.get('/npm', (req,res) => {
    
    res.render('npm', {title: 'Npm'});
});
app.get('/extra', (req,res) => {
    res.render('extra', {title: 'Extra'});
});
app.use('/user',userRoute);

app.use((req,res) => {res.render('404',{title: '404'});});


/*app.get('/add-note', (req,res) => {
    
})
*/


