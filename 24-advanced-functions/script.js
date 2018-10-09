//Array methods
//.map, .filter, .find

// function myMapper(oldArr, callback){
//   let newArray = []
//   for(let i=0; i<oldArr.length; i++){
//     newArray.push(callback(oldArr[i]))
//   }
//   return newArray
// }
//
// let timesThree = function(element){
//   return element * 3
// }
//
// let subtractOne = function(element){
//   return element - 1
// }
//
// function sayHi(){
//   console.log('hi')
// }
// function sayHello(){
//   console.log('HELLO')
// }
//
//
// // setTimeout(sayHi, 2000)
// let timerId = setInterval(sayHi, 1000)
// // setInterval(sayHello, 500)
// setTimeout(function(){clearInterval(timerId)}, 3000)

// function welcomeStudentToFlatironFactory(modNum){
//   //any variables that exists here
//   console.log(`modNum: ${modNum}`)
//   return function(studentName){
//     console.log(`Welcome, ${studentName}, to Mod ${modNum}`)
//   }
// }
//
// let welcomeStudentToMod1 = welcomeStudentToFlatironFactory(1)
// let welcomeStudentToMod2 = welcomeStudentToFlatironFactory(2)
// let welcomeStudentToMod3 = welcomeStudentToFlatironFactory(3)
// let welcomeStudentToMod4 = welcomeStudentToFlatironFactory(4)
// let welcomeStudentToMod5 = welcomeStudentToFlatironFactory(5)

// function welcomeStudentToFlatiron(modNum, studentName){
//     console.log(`Welcome, ${studentName}, to Mod ${modNum}`)
// }

// let counter = 0
//
// function incrementsCounter(){
//   counter++
//   return counter
// }

// function createCounter(){
//   let counter = 0
//   return [
//     function(){
//       counter++
//       return counter
//     },
//     function(newCounter){
//       counter = newCounter
//       return counter
//     }
//   ]
// }
//
// let counterFunctionArray = createCounter()
// let gloabl = 'fenuwiF'
//
// function generateID(){
//   let id = 0
//   return function(){
//     id = id + 1
//     return id
//   }
// }
//
// let incrementId = generateID()
//
// let newStudent = function(studentName){
//   console.log(`Welcome ${studentName}. Your ID is ${incrementId()}`)
// }
//
// newStudent('Ann')

(function (date, location, cohort){
  let string = `DC Campus was created on ${date} by ${location} with ${cohort}`
  window.campus = string
})('March 2018', 'by the white house', 'baby got stack')

createEscaper = 'fjieoajf'





























//OO Programming

class Instructor

  def initialize(name, salary)
    @name = name
    @salary = salary
  end

  def give_raise(raise)
    @salary = @salary + raise
  end

  def show_info
    puts "#{@name} makes $#{@salary}"
  end

end

arr = [Instructor.new("Ann", 100), Instructor.new("Paul", 100)]

arr.each{ |x| x.give_raise(100)}
arr.each{ |x| x.show_info}

//Functional Programming

arr = [{name:"Ann", salary:100},{name:"Paul", salary:100}]

function updateSalary(instructor, raise){
  newInstructor = Object.assign({}, instructor)
  newInstructor.salary = instructor.salary + raise
  return newInstructor
}

function updateSalaries(instructors, raise){
  return instructors.map(instructor => updateSalary(instructor, raise))
}

newArr = updateSalaries(arr, 100)
console.log(newArr)
