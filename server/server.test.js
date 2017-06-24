const request = require("supertest");
//Supertest used to test express apps
const expect = require('expect');
var app = require("./server").app;


describe("Server Testing",()=>{
  describe("GET /",()=>{
    it("should return Hello World response",(done)=>{
      request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
          expect(res.body).toInclude({
            error:"Page Not Found"
          });
        })
        //.expect(200)
        // .expect({
        //   error:"Page Not Found"
        // })
        //.expect("Hello World")
        .end(done);
    });
  });


  describe("GET /users",()=>{
    it("should return an array of users",(done)=>{
      request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
          expect(res.body).toInclude({
            Name:"Manmeet",
            Age:19
          })
        })
        .end(done);
    });
  });

});
