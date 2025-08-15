function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str === "string") {
    const result = str.replaceAll(" ", "").toUpperCase();
    return result;
  }
  else
  {
    return "Invalid";
  }
}

