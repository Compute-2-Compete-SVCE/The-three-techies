var mongoose= require("mongoose");

var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      //unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
    // required: true,
    },
    passwordConf: {
      type: String,
     // required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    phone:{
        type:Number,
        unique: true,
        required: true,
        trim:true
    }
});

var User = mongoose.model('User', UserSchema);
  module.exports = User;
  