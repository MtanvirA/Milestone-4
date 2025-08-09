let rolls = [25, 4, 5, 4, 23, 2];
let reverseRolls = [];

for (let i = rolls.length - 1; i >= 0; i--) {
  reverseRolls.push(rolls[i]);
}

console.log(reverseRolls);
