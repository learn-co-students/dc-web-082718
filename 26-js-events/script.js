document.addEventListener('DOMContentLoaded', function(){
  addEmailListeners()
  addFormListener()
  addRowListeners()
})

//on submit of form, add new isntructor row to table
function addFormListener(){
  document.querySelector('form').addEventListener('submit', function(event){
    let firstName = document.getElementById('firstNameInput').value
    let lastName = document.getElementById('lastNameInput').value
    let email = document.getElementById('emailInput').value
    document.querySelector('form').reset()
    addNewInstructorRow(firstName, lastName, email)
    event.preventDefault()
  })
}

//on click on an email tr element, console.log
function addEmailListeners(){
  let emailElements = document.querySelectorAll('.email')
  emailElements.forEach(el => el.addEventListener('click', addEmailListener))
}

function addEmailListener(event){
  event.stopPropagation()
  console.log(`sending an email ${event.currentTarget.innerText}`)
}

//on click on a person row, console.log (that person's data)
function addRowListeners(){
  let rowElements = document.querySelectorAll('.person')
  rowElements.forEach(row => row.addEventListener('click', addProfileViewListener, true))
}

function addProfileViewListener(event){
  // event.stopPropagation()
  debugger
  console.log(`viewing profile of ${event.currentTarget.innerText}`)
}

function addNewInstructorRow(firstName, lastName, email){
  let tableElement = document.querySelector('tbody')
  let trElement = document.createElement('tr')
  trElement.addEventListener('click', addProfileViewListener)

  let firstNameElement = document.createElement('td')
  let lastNameElement = document.createElement('td')
  let emailElement = document.createElement('td')
  emailElement.addEventListener('click', addEmailListener)

  tableElement.appendChild(trElement)
  trElement.appendChild(firstNameElement)
  trElement.appendChild(lastNameElement)
  trElement.appendChild(emailElement)
  firstNameElement.innerText = firstName
  lastNameElement.innerText = lastName
  emailElement.innerText = email
}

// function addNewInstructorRow(firstName, lastName, email){
//   document.querySelector('tbody').innerHTML += `
//         <tr>
//             <td class="firstName">${firstName}</td>
//             <td class="lastName">${lastName}</td>
//             <td class="email">${email}</td>
//         </tr>`
// }
