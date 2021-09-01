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
 The program will console pick the scarf to the 
 screen if the temperature is less than 0. e.g -1 etc.

 If the temperature is greater than 15 then it will 
 tell us that short sleeves are okay
 */
