addNewInstructorRow('Jane', 'Doe', 'jane.doe@flatironschool.com')

function addNewInstructorRow(firstName, lastName, email){
  let tr =   document.createElement('tr')
  tr.innerHTML =
  `
          <td class="firstName">${firstName}</td>
          <td class="lastName">${lastName}</td>
          <td class="email">${email}</td>
`
  document.querySelector('#table').appendChild(tr
  )
}

// function addNewInstructorRow(firstName, lastName, email){
//   let tableElement = document.querySelector('#table')
//
//   let trElement = document.createElement('tr')
//   trElement.id = 'row-4'
//
//   var firstNameElement = document.createElement('td')
//   var lastNameElement = document.createElement('td')
//   var emailElement = document.createElement('td')
//
//   tableElement.appendChild(trElement)
//   trElement.appendChild(firstNameElement)
//   trElement.appendChild(lastNameElement)
//   trElement.appendChild(emailElement)
//
//   firstNameElement.innerText = firstName
//   lastNameElement.innerText = lastName
//   emailElement.innerText = email
//
// }
