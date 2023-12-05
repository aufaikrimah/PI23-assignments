
// Async await
async function getDataPokemon() {
    try {
      let respons = await fetch('https://pokeapi.deno.dev/pokemon?limit=10'); 
      let pokemons = await respons.json(); 
  
      console.log(pokemons);
    } catch (error) {
      console.log(error);
    }
  }
  
  getDataPokemon();



//promise 
fetch('https://pokeapi.deno.dev/pokemon?limit=10')
  .then(res => {
    console.log(res); 
    return res.json()
}).then(res => { console.log(res);

}). catch(err => {

  console.log(err);

})