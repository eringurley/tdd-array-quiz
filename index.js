//need to create a mapped array that then filters through that array and returns 
//words that do not include y or Y 

function sentenceMaker(array) {
  return array
    .filter(word => !word.toLowerCase().includes('y'))
    .map(word => `Is it ${word}?`);
}

module.exports = sentenceMaker;
//
