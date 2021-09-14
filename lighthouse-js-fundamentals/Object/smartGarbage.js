const smartGarbage = function (trash, bins) {
  let keys = Object.keys(bins);

  for (let key of keys) {
    if (key === trash){
      bins[key]++;
    }
    
  }
  // Your code in here ...
  console.log(bins)
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });