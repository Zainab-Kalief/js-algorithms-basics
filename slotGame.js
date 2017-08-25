function randomChance(quarter) {
  var winNum = Math.trunc(Math.random() * 100);

  for (var i = 0; i < quarter; i++) {
    var random = Math.trunc(Math.random() * 100);
    if (random == winNum) {
      winprize = Math.trunc(Math.random() * (50) + 50);
      return winprize + quarter - i;
    }

  }
  return 0;

}
console.log(randomChance(50));
