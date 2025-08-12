function inchToFeet(inch) {
  let result = parseInt(inch / 12) + " Foot " + (inch % 12) + " Inch";
  return result;
}

let inch = 75;
let feet = inchToFeet(inch);
console.log("Your height is: ", feet);
