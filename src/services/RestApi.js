export async function fetchPeople() {
    let res = await fetch('https://swapi.dev/api/people/?format=json');
    let data = await res.json();
    return data.results;
}
export async function fetchPlanets() {
    let res = await fetch('https://swapi.dev/api/planets/?format=json');
    let data = await res.json();
    return data.results;
}

export async function fetchFilms() {
    let res = await fetch('https://swapi.dev/api/films/?format=json');
    let data = await res.json();
    return data.results;
}

export async function fetchFilmDetails(id) {
    let res = await fetch(`https://swapi.dev/api/films/${id}?format=json`);
    let data = await res.json();
    return data;
}

export async function fetchPeopleDetails(id) {
    let res = await fetch(`https://swapi.dev/api/people/${id}?format=json`);
    let data = await res.json();
    return data;
}

export async function fetchPlanetDetails(id) {
    let res = await fetch(`https://swapi.dev/api/planets/${id}?format=json`);
    let data = await res.json();
    return data;
}