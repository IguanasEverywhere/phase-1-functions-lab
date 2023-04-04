// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return blockNumber > 42 ? blockNumber - 42 : 42 - blockNumber;
}

function distanceFromHqInFeet(blockNumber) {
  let distanceInFeet = 264 * distanceFromHqInBlocks(blockNumber);
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  let numberOfBlocksTraveled = start > destination ? start - destination : destination - start;
  return numberOfBlocksTraveled * 264;
}

function calculatesFarePrice(start, destination) {
  let numFeetTraveled = distanceTravelledInFeet(start, destination);

  if (numFeetTraveled <= 400 && numFeetTraveled >= 0) {
    return 0;
  } else if (numFeetTraveled <= 2000) {
    numFeetTraveled -= 400;
    return numFeetTraveled * 0.02;
  } else if (numFeetTraveled > 2000 && numFeetTraveled <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}