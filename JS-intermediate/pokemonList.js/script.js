const containerPokemon = document.getElementById("list-pokemon");


async function getDataPokemon() {
  try {
    let response = await fetch('https://pokeapi.deno.dev/pokemon?limit=10');
    let pokemons = await response.json();
    displayPokemonDetails(pokemons);
  } catch (error) {
    console.log(error);
  }
}

function displayPokemonDetails(pokemons) {
  pokemons.forEach(pokemon => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    card.innerHTML = `
      <img src="${pokemon.imageUrl}" class="card-img-top" alt="${pokemon.name}">
      <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <p class="card-text">${pokemon.genus}</p>
        <p class="card-text">${pokemon.description}</p>
        <p class="card-text">Types: ${pokemon.types.join(', ')}</p>
        <p class="card-text">Abilities: ${pokemon.abilities.map(ability => ability.name).join(', ')}</p>
        <p class="card-text">Stats:</p>
        <ul>
          <li>HP: ${pokemon.stats.HP}</li>
          <li>Attack: ${pokemon.stats.Attack}</li>
          <li>Defense: ${pokemon.stats.Defense}</li>
          <li>Special Attack: ${pokemon.stats['Special Attack']}</li>
          <li>Special Defense: ${pokemon.stats['Special Defense']}</li>
          <li>Speed: ${pokemon.stats.Speed}</li>
        </ul>
      </div>
    `;

    containerPokemon.appendChild(card);
  });
}

getDataPokemon();
