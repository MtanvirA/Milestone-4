let rolls = [25, 4, 5, 4, 23, 2];
let reverseRolls = [];

for (roll of rolls) {
  reverseRolls.unshift(roll);
}

console.log(reverseRolls);
