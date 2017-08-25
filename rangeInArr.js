function printRange(num,num2,num3) {
    var array = [];
  for (var i = num; i < num2; i+=num3) {
    array.push(i);
  }
  return array;
}
console.log(printRange(2, 10, 2));
