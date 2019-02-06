const sum = require('../src/sum');
const config = require('../common/config');
const locality = require('../locality').init(config);
const generateTestObject = require('../common');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});



test('should return success on a valid call', async () => {
    const result = await locality.listProcessor({uri:'https://43z14xz9vd.execute-api.us-east-2.amazonaws.com/'},
       {"headers": {
            "Content-Type": "application/json",
            "Accept": "application/json"
                    } 
        }
    )

    console.log('xxxxxxxx')
    //chai.expect(result).to.be.a.validListDefinitionResponse; // assert
});