//fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res =>  res.json())
    .then(data => {
        data.results.forEach( pokemon => {
            console.log(pokemon.name)
        });
    })
    .catch(error => {console.log(error)})


//Async Await
const pokemones = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()
    // const arrayNombres = data.results.map(poke => poke.name)
    
    const arrayNombresFiltrado = data.results.filter(poke => poke.name !=="bulbasaur")
    // console.log(arrayNombres)
    console.log(arrayNombresFiltrado)
}

pokemones()