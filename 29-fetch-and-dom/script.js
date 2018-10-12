document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()
    let name = document.querySelector('#name-new').value
    let sprite = document.querySelector('#sprite-new').value
    createAPokemon(name, sprite)
  })
  fetchAllPokemon()

})

function createAPokemon(name, sprite){
  let data = {name: name, sprite: sprite}
  debugger
  //make a post fetch
  fetch('http://localhost:3000/pokemon/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
  .then(data => {
    //data is a pokemon obj
    render(data)
  })
}

function fetchAllPokemon(){
  fetch('http://localhost:3000/pokemon/')
  .then(response => response.json())
  .then(data => {
    data.forEach(pokemon => render(pokemon))
  })
}

function deleteAPokemon(id){
  debugger
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  }).then(response => response.json())
  .then(data => {
    console.log(data)
  })
  document.querySelector(`#pokemon-${id}`).remove()
  debugger
}

function updateAPokemon(id, name){
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name
    })
  }).then(response => response.json())
  .then(data => {
    console.log(data)
  })
}

function render(pokemon){
  let divElement = document.createElement('div')
  divElement.classList.add('card')
  divElement.id = `pokemon-${pokemon.id}`
  divElement.innerHTML = `<h2>${pokemon.name}</h2>
    <img src="${pokemon.sprite}">
    <br>
      <button id='${pokemon.id}-button'>Delete</button>`
  document.querySelector('#pokemon-container').appendChild(divElement)

  divElement.querySelector('button').addEventListener('click', function(event){
    let id = event.currentTarget.id.split('-')[0]
    deleteAPokemon(pokemon.id)
  })
}
