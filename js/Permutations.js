typeof require != "undefined" ? require( "../../codewars-runner/frameworks/javascript/cw-2.js" ) : null;
/**********************
 * BEGIN: Description
***********************
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.


Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


The order of the permutations doesn't matter.
***********************
* END: Description
***********************/

/**********************
 * BEGIN: Solution
***********************/
function permutations(string) {
	var ary = string.split(""),
		out = [];

	// If single character, only permutation is itself.
	if ( ary.length === 1 )
		out = ary;
	// For two characters, there are 2 permutations. The string, and the string reversed.
	else if ( ary.length === 2 )
		out = [ ary.join(""), ary.reverse().join("") ];
	// For any strings which are larger, recursively call this function to find permutations of remaining characters.
	else
		for ( var i = 0; i < ary.length; i++ ) {
			out = out.concat( permutations( ary.slice( Math.max( i-1, 0 ), i ).concat( ary.slice( i, ary.length ) ).join("") ).map(function(x){ return ary[i]+x; }) );
		}

	return out;
}
/**********************
 * END: Solution
***********************/



/**********************
 * BEGIN: Test Cases
***********************/
Test.describe('permutations', function() {
	it('examples from description', function() {
		Test.assertSimilar( permutations('a'), ['a'], "Single character test failed." );
		Test.assertSimilar( permutations('ab').sort(), ['ab', 'ba'].sort(), "Two distinct character test failed." );
		Test.assertSimilar( permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort(), "Multi-character test failed." );
	});
});
/**********************
 * END: Test Cases
***********************/