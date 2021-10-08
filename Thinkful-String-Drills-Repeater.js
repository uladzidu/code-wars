function repeater(string, n){
   var repeatedString = "";
  while (n > 0) {
    repeatedString += string;
    n--;
  }
  return repeatedString;
}
    