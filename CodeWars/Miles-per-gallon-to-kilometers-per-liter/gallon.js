function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  const mile = 1.609344;
  const gallon = 4.54609188;
  return +((mpg * mile) / gallon).toFixed(2);
}
