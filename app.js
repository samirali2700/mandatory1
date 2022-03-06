
//Express App
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//User Route
const userRoute = require('./routes/userRoute');

//Mongoose DB manager
const mongoose = require('mongoose');



// connect to mongodb
const dbURI = 'mongodb+srv://KEA:KEA123456789@node-server-db.akqbr.mongodb.net/Notebook?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then((result) => {
        console.log("connected to DB");
        const server = app.listen(process.env.PORT || 7777, () => {
            var port = server.address().port; 
            console.log(`App listening on port ${port}`);
        });
    })
    .catch((err) => console.warn(`Failed to connect to MongoDB: ${err}`));

    
//set view engine to ejs 
app.set('view engine','ejs');

//set a public folder, everything in folder are available from frontend
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req,res, next) => {
    
    next();
});
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



