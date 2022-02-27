const express = require('express');
const app = express();

//set view engine to ejs 
app.set('view engine','ejs');

//set a public folder, everything in folder are available from frontend
app.use(express.static('public'));



app.get('/', (req,res) => {

    //instead of sending, render method is used, first param is name of file in views folder (string)
    //second param can be used to pass object
    res.render('index', {title: 'Home'});
  // res.sendFile('index.html', {root: __dirname});
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

app.use((req,res) => {res.render('404',{title: '404'});});






app.listen(process.env.PORT || 7777, () => console.log("App listening on port 7777 or "+process.env.PORT));