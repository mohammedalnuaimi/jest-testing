//const request = require('request');
const axios = require('axios');


test('should return success on a valid call', (done) => {

     axios.get("https://api.github.com/users/octocat"
    ).then(res => {
        console.log(JSON.stringify(res.data,null, 1));
        done()
    })
}); 