// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
  return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue){
  return distanceFromHqInBlocks(someValue)*264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end){
  var distance = distanceTravelledInFeet(start, end)
  if(distance < 400){
    
  }
}