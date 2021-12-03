// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('function should return a string displaying current click counts', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You have clicked on Skyline 1 times.
    You have clicked on Waterfront 2 times.
    You have clicked on Castle 1 times.`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(1, 2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'return should be a string displaying current click counts ');
});
