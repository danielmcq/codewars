/************************************
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.


Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


The order of the permutations doesn't matter.
*************************************/


/**********************
 * BEGIN: Solution
***********************/
function permutations(string) {

}
/**********************
 * END: Solution
***********************/



/**********************
 * BEGIN: Test Cases
***********************/
describe('permutations', function() {
  it('examples from description', function() {
    Test.assertSimilar(permutations('a'), ['a']);
    Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
    Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
  });
});
/**********************
 * END: Test Cases
***********************/