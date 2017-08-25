function rangePrint(start,end,skipAmt){
  for (var i = start; i <=end; i+=skipAmt) {
    console.log(i);
  }
}
rangePrint(0,20,2);
