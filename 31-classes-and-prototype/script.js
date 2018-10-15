// let rob = {
//   firstName: 'Rob',
//   lastName: 'Cobb'
// }
// let paul = {
//   firstName: 'Paul',
//   lastName: 'Nicholsen'
// }

// function instructorFactory(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

//ES5
// function Instructor(firstName, lastName){
//     //this is my new empty object
//     this.firstName = firstName
//     this.lastName = lastName
//     Instructor.all.push(this)
// }
//
// Instructor.prototype.teach = function(){
//   console.log(`${this.firstName} is giving a lecture`)
// }
//
// Instructor.prototype.toString = function(){
//   console.log(`${this.firstName} ${this.lastName}`)
// }
//
// Instructor.all = []
// Instructor.everyoneTeach = function(){
//   console.log('all instructors teach')
//}

class Person{
  constructor(firstName, lastName, bff){
    this.firstName = firstName
    this.lastName = lastName
    this.bff = bff
  }
  greet(){
    console.log(`${this.firstName} says hi`)
  }
}

//ES6
class Instructor extends Person{
  constructor(firstName, lastName, bff, salary){
    super(firstName, lastName, bff)
    this.salary = salary
  }
  teach(){
    console.log(`${this.firstName} is giving a lecture`)
  }
  toString(){
    console.log(`${this.firstName} ${this.lastName}`)
  }
  static everyoneTeach(){
    console.log(`everyone teaches`)
  }
}
let rob	= new Instructor('Rob', 'Cobb', null, 101)
let paul = new Instructor('Paul', 'Nicholsen', rob, 100)
let jane  = new Person('Jane', 'Doe', paul)
