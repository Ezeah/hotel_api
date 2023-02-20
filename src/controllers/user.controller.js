const UserService = require('../services/user.service');

exports.getUsers = async function (req, res, next) {
    const page = req.params.page ? req.params.page:1
    const limit = re.params.limit ? req.params.limit:10;
    try {
        const user = await UserService.getUsers({}, page, limit)
        return (
            {
                status:200,
                data: user,
                message:"User has been retreived successfully"
        }).json;
    } catch (err) {
        return (
            {
                status:400,
                message:err.message,
            }).json;
      }
    }
