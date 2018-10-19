document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM loaded')
  getCatsFetch()
})

function getCatsFetch(){
  fetch(`http://localhost:3000/cats`)
  .then(res => res.json())
  .then(data => {
    data.forEach(cat => renderCat(cat))
  })
}

function renderCat(cat){
  //render cat to the DOM
  let pElement = document.createElement('p')
  pElement.innerHTML = `<b>${cat.name}</b>:   "${cat.quote}"`
  let imgElement = document.createElement('img')
  imgElement.src = cat.picture
  let catContainer = document.querySelector('#cats')
  catContainer.appendChild(pElement)

  cat.hobbies.forEach(hobby => {
    let liElement = document.createElement('li')
    liElement.innerText = hobby.name
    catContainer.appendChild(liElement)
  })

  catContainer.appendChild(imgElement)
}

// let data = {name: 'meowth', breed: 'meowth', quote:'meowth, thats right', picture: 'https://cdn.bulbagarden.net/upload/thumb/d/d6/052Meowth.png/250px-052Meowth.png'}
// fetch('http://localhost:3000/cats', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type' : 'application/json'
// 	},
// 	body: JSON.stringify(data)
// })
// .then(response => { return response.json()
// }).then(data => {
//   console.log(data)
// })
