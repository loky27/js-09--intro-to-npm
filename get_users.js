const axios = require('axios');

function makeGetRequest() {
  axios.get(' http://localhost:3000/users',{responseType:'json'}).then(response => {
    const colorsJson = JSON.stringify(response.data)
    console.log(colorsJson)
})
}


makeGetRequest();
