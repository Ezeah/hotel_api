const User = require('../models/user.model')

exports.getUsers = async function (query, page, limit) {
    try {
        user = await User.find(query)
        return users;
    } catch(err) {
        throw Error("While paginating a User")
    }
}