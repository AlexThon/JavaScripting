    
    const raining = true;
    const cold = false;

    if (raining){
    console.log("Don't forget your umbrella!");
    }

    if (cold) {
        console.log("Make sure you pick out a scarf!");
    }
    console.log("Now you are ready to go outside!");



    // nested if condition
    
    console.log("\n"); // new empty line to separate two sections

    const temperature = 12;
    if (temperature < 0) {
        console.log("Make sure you pick out a scarf!");
    } else if ( temperature < 15) {
        console.log("Short sleeves won't cut it!");
    } else {
        console.log("Short sleeves are fine.");
    }

    console.log("Now you're ready to go outside");
 /*
 The program will show pick the scarf if the temperature is less than 0. e.g -1 etc. 
 else if the temperature is greater than 15 it will 
 tell us to that wearing short sleeves is okay*/



 // logical operators section
 // with more if conditions

 const isCitizen = true;
 const age = 26;

 if (isCitizen && age > 18) {
     console.log("You are eligible to vote.");
 }

 if ( temperature < -40 || temperature > 40) {
     console.log("Maybe going outside isn't sucha  great idea..");
 }

 if (!raining) {
     console.log("Leave your umbrella at home!");
 }
 
