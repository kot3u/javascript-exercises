const findTheOldest = function(pepole) {
 
  oldest = pepole.reduce((a, b) => {
    let aAge = getAge(a.yearOfBirth, a.yearOfDeath);
    let bAge = getAge(b.yearOfBirth, b.yearOfDeath);
    return aAge > bAge ? a : b;
  })
  return oldest;
};

const getAge = (birth, death) => {
  if(!death){
    death = (new Date()).getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
