// var, let, const

//var - you can redeclare and you can reassign, have function scope
// var teacher = 'ann'
// var teacher = 'paul'
// teacher = 'rob'

//let - cannot redeclare, can reassign, have block scope
// let teacher = 'ann'
// let teacher = 'paul'
// teacher = 'rob'

//const - cannot redeclare, cannot reassign, have block scope
// const teacher = {name:'ann'}
// const teacher = 'paul'
// teacher.name = 'rob'

// let teacher = 'erin'
// function first(){
//   // var teacher = 'ann'
//   if(true){
//     // let teacher = 'paul'
//     console.log('in block scope', teacher)
//   }
//   console.log('in functional scope', teacher)
// }
// // console.log('in global scope', teacher)
//
// first()



//
//
// function first(){
//   let a = 'first'
//   function inner(){
//     console.log(a)
//   }
//   inner()
// }
//
// function second(){
//   let a = 'second'
//   inner()
// }
//
// second()










// //Functions
// //function declaration
// function functionDeclaration(){
//   console.log('inside function declartion')
// }
//
// function functionDeclaration2(){
//   console.log('inside function declartion')
// }
//
// function functionDeclaration3(){
//   console.log('inside function declartion')
// }
//
// // functionExpression()
//
// //function expression
// let functionExpression = function(){
//   console.log('inside function expression')
// }
//
// //Arrow functions
// let arrowFunction = () => {console.log('inside arrow function')}
//
//
//
//
// let timesTwo = x => x*2
//
// //equals
// let timesTwo = x => {
//   return x*2
// }







//pass by Value
// let num = 3
// function timesTwo(x){
//   return x*2
// }
// let newNum = timesTwo(num)

//pass by Reference
// let obj = {num: 3}
// function timesTwo(anotherObj){
//   let returnObj = Object.assign({}, anotherObj)
//   returnObj.num = returnObj.num*2
//   return returnObj
// }
// let newObj = timesTwo(obj.num)




array = ['a', 'b', 'c', 'd']
array.e = 'e'
object = {key1: 1, key2: 2, key3: 3}
//for .. in
//iterate through the indexes of an array
//iterate through the keys of an object


//for .. of
//iterate through the elements of an array
