const { model, Schema } = require("mongoose");
const Room = require("./roomModel");
const RoomTypes = require("./roomTypeModel");
const constants = require("../utils/constants");
const passportLocalMongoose = require("passport-local-mongoose");
const { USER_TYPES, DATABASES } = constants;

const UserSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,   
       },
       email: {
        type: string,
        required: true,
        unique: true,
        trim: true,
       }, 
       password: {
           type: string,
           required: true,
           unique: true,
           trim: true,
       },
       role: {
           type: string,
           required: true,
           unique: true,
           trim: true,
           enum: ['guest', 'admin'],
           default: guest
       },
   },
   {
       timestamps: true,
})

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema)

module.exports = User;