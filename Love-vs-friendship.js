function wordsToMarks(string){
  //your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = 0;
  
  for (let i = 0; i < string.length; i += 1) {
    result += (alphabet.indexOf(string[i]) + 1);
  }
  
  return result;
}