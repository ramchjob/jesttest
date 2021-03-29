const index = require("./index")
describe('application test ', () => {
  test('simple test', () => {
     index.getDay().then(data => {
       console.log(data)
       expect(data).toBe(1)   
     });
  });  
})
