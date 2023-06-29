

// takes in a pickup location for a passenger, and returns the number of blocks from Scuber headquarters on 42nd Street
function distanceFromHqInBlocks(someValue) {
   
    let distance = 0
   
    if (someValue > 42) {
        distance = someValue - 42
    } else if(someValue < 42) {
        distance = 42 - someValue 
    }
    return distance
  }

  // returns the distance from Hq in feet. Each block in Manhattan is 264 feet long
  function distanceFromHqInFeet(someValue) {
   
    return distanceFromHqInBlocks(someValue) * 264 

  }
  // returns distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
   
    let distance = 0 
   
    if (start > destination) {
        distance = (start - destination) * 264
    } else if (start < destination) {
        distance = (destination - start) * 264
    }
    return distance
  }
 
  // returns the fare price calculated by distance
  function calculatesFarePrice(start, destination) {
   
    let distance = distanceTravelledInFeet(start, destination) 
    let fare = 0
    
        
    if (distance > 400 && distance < 2000){
      console.log('case1')
        fare = (distance - 400) * .02
    } else if (distance >= 2000 && distance < 2500){
       console.log('case2')
        fare = 25
    } else if (distance >= 2500) {
         console.log('case3')
        return 'cannot travel that far'
      
    }
     
    return fare;


  }