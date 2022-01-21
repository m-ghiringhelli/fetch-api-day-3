export async function getPokedex() {
    let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
    const pokedek = await fetch(url);
    const json = await pokedek.json();
    return json.results;
}