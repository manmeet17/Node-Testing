module.exports.add = (a,b)=>{
  return a+b;
};

module.exports.addAsync=(a,b,callback)=>{
  setTimeout(function () {
    callback(a+b);
  }, 1000);
};

module.exports.sq=(x)=>x*x;

module.exports.setName=(user,name) =>{
  var n=name.split(" ");
  user.fName=n[0];
  user.lName=n[1];
  return user;
};
