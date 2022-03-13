function writeCards(arr, e) {
  let names = [];
  for (let i = 0; i < arr.length; i++) {
    names.push(`Thank you, ${arr[i]} for the wonderful ${e} gift!`);
  }
  return names;
}

console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

let counter = 10;
while (counter >= 0 ) {
  console.log(counter);
  counter--;
}

