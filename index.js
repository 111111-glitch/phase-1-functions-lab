// Code your solution in this file

function distanceFromHqInBlocks(location){

    const hqLocation = 42;
    return Math.abs(location - hqLocation);
  }


function distanceFromHqInFeet(location) {
    distanceFromHqInBlocks();
    const feetPerBlock = 264; 
  const blocks = Math.abs(location - 42); 
  return blocks * feetPerBlock; 

}



function distanceTravelledInFeet(start, end) {
  const feetPerBlock = 264; 
  const distanceInBlocks = Math.abs(end - start);
  return distanceInBlocks * feetPerBlock;



}

function calculatesFarePrice(start, destination) {
    
    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
  
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      
      return 25;
    } else {
      return 'cannot travel that far'; 
    }

  }
