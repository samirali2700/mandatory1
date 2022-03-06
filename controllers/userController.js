const User = require('../models/user');


const user_index = (req, res) =>  {
    User.find().sort({  createdAt: -1   })
        .then((result) => {
            console.log(result)
            res.render('./user/index', {title: 'User', users: result});
        })
        .catch((err) => console.warn(`user_index failed: ${err}`));
}

const user_details = (req,res) => {
    User.findById(req.params.id)
        .then((result) => {
            res.render('', {title: '', user:result});
        })
        .catch((err) => console.warn(`user_details Failed: ${err}`));
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

    user.save()
    .then((result) => {
        res.redirect('/user')
    })
    .catch((err) => console.log(`user_create_post failed: ${err}`));
}
const user_delete = (req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(res.json({redirect: '/user'}))
        .catch((err) => console.warn(`user_delete failed: ${err}`));
}
const user_update = (req,res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username === undefined ? 'skip' : req.body.username,
        password: req.body.password === undefined ? 'skip' : req.body.username
   });

   User.findByIdAndUpdate(req.params.id, user, {new:true})
   .then((result) => {
       if(!result){
           res.status(404).send();
       }
   })
   .catch((err) => console.warn(`user_update failed: ${err}`));
}



module.exports = {
    user_index,
    user_details,
    user_create_get,
    user_create_post,
    user_delete,
    user_update
}