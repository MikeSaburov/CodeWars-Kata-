function factorial(n) {
  //your code here
  let result = 1;

  while (n) {
    result *= n--;
  }
  return result;
}
