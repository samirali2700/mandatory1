const express = require('express');
const Router = express.Router();

const User = require('../models/user');


Router.get('/', (req,res) => {
    res.render('./user/index', {title: 'User'});
})
Router.get('/:id', (req,res) => {})

Router.post('/', (req,res) => {})
Router.delete('/:id', (req,res) => {})
Router.put('/:', (req,res) => {})

module.exports = Router;