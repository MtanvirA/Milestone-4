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
  } 

  else if (Array.isArray(marks) && marks.length === 0) {
    const result = { finalScore: 0, pass: 0, fail: 0 };
    return result;
  }
  else
  {
    return "Invalid";
  }
}

