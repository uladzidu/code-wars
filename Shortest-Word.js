function findShort(s) {
  const stringArray = s.split(" ");  // <-- no .trim()
  const orderedArray = stringArray.sort((a, b) => {
    return a.length - b.length;  // - instead of >
  })
  return orderedArray[0].length;
}