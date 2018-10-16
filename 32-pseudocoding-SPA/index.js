//Understand what the problem is and what the solution looks like
//What are you user stories/deliverables?

//0. When the page loads, I make a Get all fetch to ingredients
//1. When I click on "Create an ice cream" button, I make a POST fetch, and then render that ice cream inside #iceCreamGrid
//2. When the page load, I make a GET all fetch to ice creams, and then render all ice creams inside #iceCreamGrid
//3. When I click on "Edit", I make a PATCH fetch, and then re-render that icrea to the DOM (how???)
//4. When I click on "Delete", I make a DELETE fetch, and then remove that element from the DOM
let ingredientsArray = []

document.addEventListener('DOMContentLoaded', function(){
  //do something when the page loads
  console.log('test')
  debugger
  getIngredientsFetch()

  //grab #createIceCream.addEventListener('click', postIceCream)

})

function postIceCream(){
  let name = //grab #iceCreamName.value
  let ingredients = []
  //grab #iceCreamCheckboxes.querySelectorAll('li').forEach(li => ingredients.push(li.dataset.ingreId))
  let body = {
    "name": , name
    "ingredients": ingredients
  }
  fetch(`http://localhost:3000/ice_cream`, {
    method: "POST",
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
    //renderIceCream(data)
  })
}

function getIngredientsFetch(){
  fetch(`http://localhost:3000/ingredient`)
  .then(response => response.json())
  .then(data => {
    //do something with data
    //ingredientsArray=ingre
    //render data.forEach(ingre => {
  //   renderIngredient(ingre)
  // })
  //getIceCreamsFetch()
  })
}

function getIceCreamsFetch(){
  fetch(`http://localhost:3000/ice_cream`)
  .then(response => response.json())
  .then(data => {
    //do something with ice cream data
    //data.forEach(iceCream => renderIceCream(iceCream))
  })
}

function deleteIceCreamFetch(id){
  fetch(`http://localhost:3000/ice_cream/${id}`, {
    method: "DELETE"
  }).then(response => {
    // if(response.status === 200){
    //   repsonse.json()
    // }else if(repsonse.status === 500){
      //throw an error, server is down and display a pop up
    }
  })
  .then(data => {
    //do something with data IF we want
    //grab the #ice-cream-${id}, remove it from the DOM
  })
}

function patchIceCreamFetch(id){
  let name = //grab #input.value
  let ingredients = []
  //grab #ul.querySelectorAll('li').forEach(li => ingredients.push(li.dataset.ingreId))
  let body = {
    "name": , name
    "ingredients": ingredients
  }
  fetch(`http://localhost:3000/ice_cream/${id}`, {
    method: "POST",
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
    //some how... re-render the newly updated icecream without refreshing the page
  })
}

function renderIceCream(iceCream){
  //create div with id = "ice-cream-${iceCream.id}"
  //render iceCream.name
  //render img with src icecream.jpeg
  //render editButton
    //editButton.addEventListener('click', showEditForm)
  //render deleteButton
    //deleteButton.addEventListener('click', function(){
      //deleteIceCreamFetch(iceCream.id)
  //})
  //loop through iceCream.ingredients, find the ingredient name inside ingredientsArray
    //render as li element

  //appendChild to
}

function showEditForm(event){
  //let id = event.currentTarget.parent.parent.dataset.id    // going to give me the ice cream id
  //grab #ice-cream-${id}, clear its innerHTML
  //re-render with input, img, submitButton, ul, and li

  //submitButton.addEventListener('click', function(){
    //patchIceCreamFetch(id)
  //})
}

function renderIngredient(ingre){
  //get iceCreamCheckboxes
  //let el = document.createElement('li')
  //innerText = ingre.name
  //.dataset.ingreId = ingre.id
  //iceCreamCheckboxes.appendChild(el) to #iceCreamGrid
}
