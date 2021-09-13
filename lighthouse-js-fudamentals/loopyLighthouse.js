

/*

INPUT: range, multiples and words.
All arrays have two elements each.
The program prints out values from range[0] to range[1] both starting and last values included.
If the value is divisible by any value contains in multiples
that value is replaced with a corresponding string in the words array.

Return: NULL
*/

const loopyLighthouse = (range, multiples, words) => {
    let value = range [0];
    let last = range[1];
    for ( value; value < last; value++) {
        if ( value % multiples[0] === 0) {
            let num = words[0];
            console.log(num);
        } else if ( value % multiples[1] === 0){
            let word = words[1] ;
            console.log(word);
        } else if ( (value % multiples[0] === 0) && (value % multiples[1] === 0)){
            let word = words[1] + words[1] ;
            console.log(word);
        } else {
            if ( value % multiples[0] !== 0 || value % multiples[1] !== 0) {
                console.log(value);
            }
        }
    } // close forloop
} // close loopyLight()


loopyLighthouse ([15,90], [2, 5], ["Batty", "Beacon"])