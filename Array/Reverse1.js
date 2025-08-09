let roll = [25, 4, 5, 4, 23, 2];
let reverseRoll = [];

for (let i = 0; i < roll.length; i++) {
  reverseRoll.unshift(roll[i]);
}

console.log(reverseRoll);
