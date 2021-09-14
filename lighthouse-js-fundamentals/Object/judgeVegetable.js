const judgeVegetable = function (vegetables, metric) {
  let highest_ranking = 0;
  let submitBy;
  // Your code in here ...
  for (let persons of vegetables ){
    let keys = Object.keys(persons);

    for (let key of keys){
      if( key === metric && highest_ranking < persons[key]) {
        highest_ranking = persons[key];
        submitBy = persons.submitter; 
      }  // close if
    }   // close inner forloop 
  }    // close outer forloop
  console.log(submitBy); 
} // close judgeVegetable()



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
judgeVegetable(vegetables, metric)