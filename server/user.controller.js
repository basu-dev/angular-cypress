const User = require('./user.schema');
async function getUsers(req,res){
    const users = await User.find();
    return res.send(users);
}

async function addUser(req,res){
    let user = req.body;
    const createdUser = await User.create(user);
    return res.send(createdUser);
}

module.exports = {
    getUsers,
    addUser
}