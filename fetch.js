export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const pokedex = await fetch(url);
    const json = await pokedex.json();
    return json.results;
}
export async function getStarWarsFolx() {
    let url = 'https://swapi.dev/api/people';
    const starWarsDex = await fetch(url);
    return starWarsDex.results;
}