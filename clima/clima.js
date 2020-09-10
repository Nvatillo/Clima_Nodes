const axios = require('axios');



const getClima = async(lat, long) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=fe1eed11ee79dfb2fb5a4a358fa301bb&units=metric`);
    let temperatura = resp.data.main.temp;
    let nombre = resp.data.sys.country;
    return { temperatura, nombre }
}


module.exports = { getClima }