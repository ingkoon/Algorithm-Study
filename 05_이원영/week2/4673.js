//6-2 4673

let arr = [];
for (let i = 1; i <= 10000; i++) {
    arr.push(i);
}

let num = 1;
for (let i = 0; i <= 10000; i++) {
  let result = 0;
  let sum = 0;

  for (let j = 0; j < i.toString().length; j++) {
    sum += Number(i.toString()[j]);
  }

  result = i + sum;
  let idx = arr.indexOf(result);
  if (idx !== -1) {
    arr.splice(idx, 1);
  }
}

for (idx in arr) {
  console.log(arr[idx]);
}
