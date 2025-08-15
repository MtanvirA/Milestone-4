function totalFine(fare) {
  // You have to write your code here
  if (typeof fare === "number" && fare > 0) {
    const fine = fare + fare * 0.2 + 30;
    return fine;
  } else {
    return "Invalid";
  }
}



function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str === "string") {
    const result = str.replaceAll(" ", "").toUpperCase();
    return result;
  } else {
    return "Invalid";
  }
}



function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 === "object" && typeof player2 === "object") {
    const off1 = player1.foul + player1.cardY + player1.cardR;
    const off2 = player2.foul + player2.cardY + player2.cardR;
    if (off1 === off2) {
      return "Tie";
    } else if (off1 > off2) {
      return player2.name;
    } else {
      return player1.name;
    }
  } else {
    return "Invalid";
  }
}



function isSame(arr1, arr2) {
  // You have to write your code here
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}



function resultReport(marks) {
  // You have to write your code here
  if (Array.isArray(marks) && marks.length > 0) {
    let total = 0;
    let passed = 0;
    let failed = 0;
    for (mark of marks) {
      total += mark;
      if (mark >= 40) {
        passed++;
      } else {
        failed++;
      }
    }
    const avg = Math.round(total / marks.length);
    const result = { finalScore: avg, pass: passed, fail: failed };
    return result;
  } else if (Array.isArray(marks) && marks.length === 0) {
    const result = { finalScore: 0, pass: 0, fail: 0 };
    return result;
  } else {
    return "Invalid";
  }
}
