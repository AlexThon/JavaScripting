/* station must have atleast a capacity of 20
 the station must be a school or community center */


const chooseStation = (stations) => {
  selectedStation = [];
  for (let station of stations) {
    if ( station[1] >= 20 ) {
      switch(station[2]) {
        case "school":
        case "community centre":
          selectedStation.push(station[0]);
          break;
        default:
         console.log("No stations");
      }
    } // close if 
    
  } //close for
  console.log(selectedStation);
} // close chooseStation

// station[2] === "school" || 
// station[2] === "community centre")



const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];

chooseStation(stations);