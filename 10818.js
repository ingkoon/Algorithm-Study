//5-1 10818
var n = 5;
var arr = [20, 10, 35, 30, 7];

var max = arr[1];
var min = arr[1];

for (var i = 1; i<n;i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
}

console.log(max+' '+min);