// import functions
import { getPokedex } from './fetch.js';
import { getStarWarsFolx } from './fetch.js';

//checking on import
//console.log('app.js is here!!!')

// grab DOM elements
const template = document.querySelector('#template');
const list = document.querySelector('#list');
const selectEl = document.querySelector('select');

//checking on grab
//console.log('template', template);

//function to render API
async function loadPokedex() {
    const pokedex = await getPokedex();
    //list.classList.add('pokemon');
    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#name');
        const height = clone.querySelector('#height');
        const weight = clone.querySelector('#weight');
        const home = clone.querySelector('#home');
        
        name.textContent = 'Name: ' + pokemon.pokemon;
        height.textContent = 'Height: ' + pokemon.height;
        weight.textContent = 'Weight: ' + pokemon.weight;
        home.textContent = 'Home: ' + pokemon.pokebase;
        
        list.appendChild(clone);
    }
}

async function loadStarWars() {
    const starWarsFolx = await getStarWarsFolx();
    
    for (let character of starWarsFolx) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('#name');
        const height = clone.querySelector('#height');
        const weight = clone.querySelector('#weight');
        const home = clone.querySelector('#home');

        name.textContent = 'Name: ' + character.name;
        height.textContent = 'Height: ' + character.height;
        weight.textContent = 'Weight: ' + character.mass;
        home.textContent = 'Home: ' + character.homeworld;
        
        list.appendChild(clone);
    }
}

// set event listeners 
selectEl.addEventListener('change', async(e) => {
    const selected = e.target.value;

    if (selected === 'pokemon') {
        list.innerHTML = '';
        await loadPokedex();

    } else if (selected === 'star-wars') {
        list.innerHTML = '';
        await loadStarWars();
    }
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state