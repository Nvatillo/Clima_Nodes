const axios = require('axios');


const getPokemonyHabilidades = async(nombre_pokemon) => {
    const encodeURL = encodeURI(nombre_pokemon);

    const instance = axios.create({
        baseURL: `https://pokeapi.co/api/v2/pokemon/${encodeURL}`
    });

    let resp = await instance.get();
    // .then((result) => {
    //     console.log(`El pokemon Es : ${result.data.name}`.green);
    //     if (result.data.moves <= 1) {
    //         console.log(`Mi poder Es: ${result.data.moves[0].move.name}`.green);
    //     } else {
    //         for (const movimientos of result.data.moves) {
    //             console.log(`Mi poder Es: ${movimientos.move.name}`.green);
    //         }
    //     }
    // }).catch((err) => console.log('error', err));
    // return resp;

    if (resp.data.length === 0) {
        throw new Error('Tu pokemon no se encuentra');
    } else {
        var nombre_poke = resp.data.name;
        var poderes = [];
        if (resp.data.moves <= 1) {

            // poderes.push(resp.data.moves[0].move.name)
        } else {
            for (const movimientos of resp.data.moves) {
                poderes.push(movimientos.move.name);
            }
        }
    }
    return {
        nombre_poke,
        poderes
    }
}





module.exports = { getPokemonyHabilidades }