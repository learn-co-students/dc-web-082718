console.log('TIPS')

//input: an array of arrays   //output: a number

//go through each array of numbers
  //compare all numbers, find min and max
  //subtract min from max
  //add that difference to a running total
//return that running total

//null values, make sure that pass in an array,
//negative numbers, floats, small numbers, big numbers
var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

function findCheckSum(data){
  let sum = 0
  for(let i = 0; i < data.length; i++){
    // let sortedArray = data[i].sort((a,b) => a-b)
    // sum += (sortedArray[data[i].length - 1] - sortedArray[0])
    sum += (findMax(data[i]) - findMin(data[i]))
  }
  return sum
}

function findMax(array){
  //array.sort()[array.length-1]
  //Math.max(...array)
  let max = array[0]
  for(let i = 0; i < array.length; i++){
    if(max < array[i]){
      max = array[i]
    }
  }
  return max
}

function findMin(array){
  //array.sort()[0]
  //Math.min(...array)
  let min = array[0]
  for(let i = 0; i < array.length; i++){
    if(min > array[i]){
      min = array[i]
    }
  }
  return min
}

findCheckSum(data)
