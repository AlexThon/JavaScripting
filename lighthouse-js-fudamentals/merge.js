const merge = (arr1, arr2) => {
  const newArray = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArray.push(arr1.shift())
    }
    newArray.push(arr2.shift())
    }
 return [...newArray,...arr1,...arr2];
};



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4, 4, 5, 6 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);