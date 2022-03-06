
const express = require('express');
const Router = express.Router();

const userController = require('../controllers/userController');



Router.get('/', userController.user_index);


Router.get('/add', userController.user_create_get);
Router.get('/:id', userController.user_details);

Router.post('/add', userController.user_create_post);

Router.put('/update/:id', userController.user_update);

Router.delete('/delete/:id', userController.user_delete);


module.exports = Router;