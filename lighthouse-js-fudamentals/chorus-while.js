const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
    console.log(chorus);
    repeat += 1; 
}

console.log("Until the sun comes up!");


// section two


while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");