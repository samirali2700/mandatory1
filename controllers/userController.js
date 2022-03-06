// user_index user_details user_create_get user_create_post user_delete user_update
const User = require('../models/user');


const user_index = (req, res) =>  {
    User.find().sort({  createdAt: -1   })
        .then((result) => {
            console.log(result)
            res.render('./user/index', {title: 'User', users: result});
        })
        .catch((err) => console.warn(err));
}
const user_details = (req,res) => {

}
const user_create_get = (req,res) => {
    res.render('./user/add', {title: 'Add User'});
}
const user_create_post = (req,res) => {
   
  
    const user = new User({
         firstname: req.body.firstname,
         lastname: req.body.lastname,
         username: req.body.username === undefined ? 'skip' : req.body.username,
         password: req.body.password === undefined ? 'skip' : req.body.username
    });
    console.log(user)
    user.save()
    .then((result) => {
        res.redirect('/user')
    })
    .catch((err) => console.log(err));
}
const user_delete = (req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(res.json({redirect: '/user'}))
        .catch((err) => console.warn(err));
}
const user_update = (req,res) => {

}









module.exports = {
    user_index,
    user_details,
    user_create_get,
    user_create_post,
    user_delete,
    user_update
}