// insert element 109 at 2 index of the array

function insert(arr, index, element) {
  // check out of bound condition

  if (index < 0 || index > arr.length) {
    console.log("Index is out of bound");
  }
  for (let i = arr.length; i > index - 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index - 1] = element;
}

let arr = [12, 43, 23, 31, 23, 78];
let index = 3;
let element = 109;

insert(arr, index, element);
console.log("Array after insertion is : " + arr);
