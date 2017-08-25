function pennyForThirty() {
  var money = 0.01;
    for(var i=2; i<=30; i++) {
      money *= 2;
    }
    return money;
}
console.log(pennyForThirty());



function daysToGetTo(dollars){
  var money = 0.01
  var num = 1
    while (money <= dollars) {
      money *= 2;
      if (money == dollars){
        break;
      }
      num++;
    }
    return num;
}
console.log(daysToGetTo(10000));
console.log(daysToGetTo(10000000));
