const whichSchool  = (age) => {
    if ( age >= 19 && age <= 100 ) {
      console.log("Lighthouse Labs");
    } else if ( age <= 18 && age >= 13) {
      console.log('Secondary School')
    } else if ( age <= 12 && age > 0) {
      console.log("Elementary School")
    }
  }
  
  
  whichSchool(35);
  whichSchool(8);
  whichSchool(14)