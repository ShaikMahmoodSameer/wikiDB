var Userdb = require('../model/model');

// create and save new user
const create = async () => {
    // validate request
    // if(!req.body){
    //     req.status(400).send({message: "Content cannot be empty"});
    //     return;
    // }

    // new user
    const user = new Userdb({
        title: "TItle 2 article",
        content: "Content 2 of article"
    })

    // save user in database
    user
        .save(user)
        .then(data => {
            // res.send(data);
            // res.redirect('/home')
        })
        .catch(err => {
            // res.status(500).send({
            //     message: err.message || "Some error occured while creating a create operation"
            // });
        });
}

module.exports = create;