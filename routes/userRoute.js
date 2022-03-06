
//define and intialize an express Router instance
const express = require('express');
const Router = express.Router();

//require the routes logic 
const userController = require('../controllers/userController');

//define routes without any logic
Router.get('/', userController.user_index);

Router.get('/add', userController.user_create_get);
Router.post('/add', userController.user_create_post);

Router.get('/update/:id', userController.user_update_get);
Router.patch('/update/:id', userController.user_update_patch);
Router.delete('/delete/:id', userController.user_delete);

Router.get('/:id', userController.user_details);

//export router 
module.exports = Router;

