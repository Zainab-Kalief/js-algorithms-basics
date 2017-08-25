function fancy(array) {
  for (var i=0; i<array.length; i++) {
    var ind = i;
    var value = array[i];
    console.log(ind + " -> " + value);
  }
}
fancy([ "James", "Jill", "Jane", "Jack" ]);
