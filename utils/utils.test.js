const utils = require('./utils')
const expect = require('expect');

describe("Utils",()=>{
  it('should add two numbers',()=>{
    var res = utils.add(10,8);
    if(res!=18){
      throw new Error(`Expected 18 got ${res}`);
    }
  });

  it('should async add ',(done)=>{
    utils.addAsync(3,4,(sum)=>{
      expect(sum).toBe(7);
      done();
    });
  });

  it('should square the number',()=>{
    var x=utils.sq(8);
    expect(x).toBe(64).toBeA('number');
  });


  //toBe cannot be used for arrays and objects
  it("should verify the name",()=>{
    var user={};
    var name=utils.setName(user,"Manmeet Tarun");
    expect(name.fName).toBeA("string").toBe("Manmeet");
    expect(name.lName).toBeA("string").toBe("Tarun");
    expect(name).toInclude({
      fName:"Manmeet",
      lName:"Tarun"
    });
  });
  
});
