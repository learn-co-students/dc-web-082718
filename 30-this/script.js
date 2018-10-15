// 'use strict'

// function showThis(){
//   this.firstName = 'hello'
//   console.log('this value of this', this)
// }

// let ann = {
//   firstName: 'Ann',
//   lastName: 'Duong',
//   greet: function(){
//     let setFullName = function(){
//       debugger
//       this.fullName = `${this.firstName} ${this.lastName}`
//     }
//     setFullName()
//     console.log(`${this.fullName} says hi`)
//   }
// }
//
let paul = {
  firstName: 'Paul',
  lastName: 'Nicholsen',
  greet: greet
}

let rob = {
  firstName: 'Rob',
  lastName: 'Cobb',
  greet: greet
}



let boundGreet = greet.bind(rob)
let anotherBoundGreet = boundGreet.bind(paul)

 function createWelcomeStudentToModFunction(num){
   return function(name){
     console.log(`Welcome ${name} to Mod ${num}`)
   }
 }

let welcomeStudentToMod1 = createWelcomeStudentToModFunction.bind(null,1)()
let welcomeStudentToMod2 = createWelcomeStudentToModFunction.bind(null,2)()
let welcomeStudentToMod3 = createWelcomeStudentToModFunction.bind(null,3)()
let welcomeStudentToMod4 = createWelcomeStudentToModFunction.bind(null,4)()
let welcomeStudentToMod5 = createWelcomeStudentToModFunction.bind(null,5)()







let boundGreetPerson = greet.bind(paul, 'bruno')

function greet(otherPerson1, otherPerson2){
  console.log(`${this.firstName} says hi to ${otherPerson1} and ${otherPerson2}`)
}

(function(){
  console.log(this.firstName)
}).call(paul)

greet.call(paul, 'bruno')








//
