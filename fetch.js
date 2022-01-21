export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const pokedex = await fetch(url);
    const json = await pokedex.json();
    return json.results;
}