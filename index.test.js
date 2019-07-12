const sentenceMaker = require ('../lib/index')
//describe 
describe('map array method function test', () => {

  it('takes an array and  removes Ys and makes a sentence', () => {
    const originalArray = ['sky', 'hot', 'Yeti', 'green'];
    const expectedArray = ['Is it hot?', 'Is it green?']
    const actualArray  = sentenceMaker(originalArray);
    expect(actualArray).toEqual(expectedArray);
  });
});
