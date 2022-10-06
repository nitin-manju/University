/*
Run:

const array1 = [1, 2, 3, 4, 5];

var bs = new BinarySearch();
var found = bs.search(array1, 3);

if (found)
  console.log("Found");
else
  console.log("Not found");

*/


class BinarySearch {
  constructor() {
  }

  //Performs a binary search
  //Returns true if 'e' is found in 'array' else false
  search(array, e) {
    var lo = 0;
    var hi = array.length - 1;
    var found = false;

    do {
      var mid = Math.floor((lo + hi) / 2);

      if (e === array[mid]) {
        found = true;
        break;
      }
      else if (e > array[mid]) {
        lo = mid + 1;
      }
      else {
        hi = mid;
      }
    } while (lo < hi)

    return found;
  }
}

