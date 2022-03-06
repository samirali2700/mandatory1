
//define and intialize an express Router instance
const express = require('express');
const Router = express.Router();

//require the routes logic 
const userController = require('../controllers/userController');

//define routes without any logic
Router.get('/', userController.user_index);

Router.get('/add', userController.user_create_get);
Router.get('/:id', userController.user_details);

Router.post('/add', userController.user_create_post);

Router.put('/update/:id', userController.user_update);
Router.patch('/update/:id', userController.user_update);

Router.delete('/delete/:id', userController.user_delete);

//export router 
module.exports = Router;

