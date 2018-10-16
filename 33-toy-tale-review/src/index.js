let addToy = false


// ===============

document.addEventListener("DOMContentLoaded", function(){

  runGivenCode()
  fetchAllToys()
  addFormListener()
})

// ===============

function runGivenCode(){
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // submit listener here
    } else {
      toyForm.style.display = 'none'
    }
  })
}


// When the page loads, make a 'GET' request to fetch all the toy objects. With the response data, make a `<div class="card">` for each toy and add it to the toy-collection div.
function fetchAllToys(){
  fetch("http://localhost:3000/toys")
  .then(r => r.json())
  .then(allToysData => {
    allToysData.forEach(renderToy)
  })
}

function renderToy(toyObj) {
  let cardDiv = document.createElement("div")
  cardDiv.classList.add("card")
  let toyCollectionDiv = document.getElementById("toy-collection")
  toyCollectionDiv.appendChild(cardDiv)

  // Each card should have the following child elements:
  //   * h2 tag with the toy's name
  let header = document.createElement("h2")
  header.innerText = toyObj.name
  cardDiv.appendChild(header)
  //   * image tag with the src of the toy's image attribute - needs a class name of "toy-avatar"
  let image = document.createElement("img")
  image.src = toyObj.image
  image.classList.add("toy-avatar")
  cardDiv.appendChild(image)
  //   * p tag with how many likes that toy has
  let likesPara = document.createElement("p")
  likesPara.innerText = toyObj.likes
  likesPara.id = `p-${toyObj.id}`
  cardDiv.appendChild(likesPara)
  //   * button tag with an class of "like-btn"
  let likesBtn = document.createElement("button")
  likesBtn.innerText = "like"
  likesBtn.classList.add("like-btn")
  likesBtn.id = `btn-${toyObj.id}`
  likesBtn.addEventListener("click", increaseLikes)
  cardDiv.appendChild(likesBtn)
  // console.log(`rendering successful for toy '${toyObj.name}'!`)
  // console.log(`toyObj:`, toyObj)
  // console.log(`-----------------`)
}


// look at the toyForm

// grab that info from toyForm
// send that to our "backend server"
// // a POST request is sent to http://localhost:3000/toys and the new toy is added to Andy's Toy Collection.
//  The toy should conditionally render to the page.

function postNewToy(body) {
  let url = 'http://localhost:3000/toys'
  let options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  fetch(url, options)
    .then(res => res.json())
    .then(json => renderToy(json))
}



function addFormListener() {
  let form = document.querySelector('.add-toy-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log('current target', e.currentTarget);
    // console.log('e', e.target.name.value)
    // console.log('e', e.target.image.value)
    postNewToy(getUserInput())
    debugger;
  })
}

function getUserInput() {
  ////grab both inputs from form, return their values
  console.log('inside get user input');
  let name = document.querySelector('#name-input')
  let image = document.querySelector('#image-input')
  return {
    likes: 0,
    name: name.value,
    image: image.value
  }
}

function increaseLikes(event) {
  let id = event.currentTarget.id.split("-")[1];
  let url = `http://localhost:3000/toys/${id}`

  let likes = parseInt(document.getElementById(`p-${id}`).innerText)

  let body = {
    likes: likes + 1
  }

  let options = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }

  fetch(url, options)
  .then(r=>r.json())
  .then(json => {
    // update likes on dom, pass in ID
    updateLikesOnDOM(id, json.likes)
  })
  // need to know which toy this "like event" took place on
  // patch to http://localhost:3000/toys/:id
}

function updateLikesOnDOM(id, newLikesCount){
  let targetPTag = document.getElementById(`p-${id}`);
  targetPTag.innerText = newLikesCount;
  // debugger
}
