function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}