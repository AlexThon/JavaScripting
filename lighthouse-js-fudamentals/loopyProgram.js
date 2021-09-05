
// The program prints numbers from 100 to 200 (inclusive)
// prints loopy if the number is divisible by 3
// print lighthouse if divisible by 4
//print loopyLighthouse if number is divisible by 3 and 4


const loopy = () =>  {
    let num;
    for (num = 100; num <= 200; num++) {
        console.log(num)
        
         if (num % 3 === 0) {
             console.log("Loopy")
         }

         else if ( num % 4 === 0){
             console.log("Lighthouse");
         }

         else {
            if ( (num % 4 === 0) && (num % 3 === 0))
                console.log("LoopyLighthouse");
        }
       
    } // close for loop
} // close loopy function

console.log(loopy());