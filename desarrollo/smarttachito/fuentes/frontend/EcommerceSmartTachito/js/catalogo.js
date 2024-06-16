const pokemonContainer = document.getElementById('pokemon-container');

const fetchPokemon = async () => {
    for (let i = 1; i <= 18; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon-card');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const image = pokemon.sprites.front_default;

    const pokemonInnerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>#${id}</p>
    `;

    pokemonElement.innerHTML = pokemonInnerHTML;
    pokemonContainer.appendChild(pokemonElement);
};

fetchPokemon();
