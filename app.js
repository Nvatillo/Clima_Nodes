const colors = require('colors');
const pokemon = require('./Pokemon/pokemon');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    pokemon: {
        alias: 'p',
        desc: 'Pokemon ',
        demand: true
    }
}).argv;


pokemon.getPokemonyHabilidades(argv.pokemon).then(result => console.log(result));

clima.getClima(-38.7396500, -72.5984200).then(console.log).catch(console.log);