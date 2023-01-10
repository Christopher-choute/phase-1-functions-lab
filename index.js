// Code your solution here//
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42)
 }

 function distanceFromHqInFeet(ft){
   const blocks = distanceFromHqInBlocks(ft);
    return blocks * 264
 }

function distanceTravelledInFeet(start,destination){
 return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start);
}

function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination);
    let farePrice = ""
   if (distance <= 400){
    return farePrice = 0;
   }
    else if (distance > 400 && distance < 2000){
    return farePrice = 2.56
    }   
    else if (distance > 2000 && distance < 2500){
    return farePrice = 25;
    }   
    else {
    return "cannot travel that far" 
    
} 
    }
