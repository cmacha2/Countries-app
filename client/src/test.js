const axios = require('axios')

async function getCountry() {
    let body = {
        "ids":["CUB","CAN","ARG","MXM"],
          "name":"Patinaje",
          "difficulty":5,
       "duration":"11 dias", 
          "season":"verano"
      }
    const {data} = await axios.post(`http://localhost:3001/activities`,body)
    console.log(data)
}
getCountry()