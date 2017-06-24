var db = require('./db');

module.exports.handleSignup = (email,password)=>{
  //Check if email exists
  //Save user to database
  db.saveUser({
    email,
    password
  });
  //Send welcome email
};
