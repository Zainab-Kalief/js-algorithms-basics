function numbersOnly(arr) {
  var newArray = [];
    for(var i=0; i<arr.length; i++) {
      if (arr[i] >= 0){
        newArray.push(arr[i]);
      } else if (arr[i] <= 0){
        newArray.push(arr[i]);
      }
    }
    return newArray;
}

console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));
