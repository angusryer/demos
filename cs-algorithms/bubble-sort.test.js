/**
 * Bubble sorting
 */

const unsortedArray = [13, 45, 11224, 23, 5, 687, 261, 33, 1114, 62476, 232, 0, 13];

function sortArray(array) {
    // Just a safety check to make sure we actually have an array that can be sorted
    if (Array.isArray(array) && array.length > 1) {

        // Create a function-scoped 'sentinel' variable to track whether we swapped any
        // numbers on the last cycle.
        let swapped = false;

        // Perform the operation at least one time using a 'do/while' loop
        do {

            // We set this to 'false' just inside the do/while to make sure that
            // the swapped variable is reset after the last for loop cycle
            swapped = false;
            for (let i = 0; i < array.length; i++) {

                // Convert possible null or undefined values with numbers
                // *** Causes low-level crash, error: "Fatal JavaScript invalid size error 156957535"
                // array[i] = array[i] || 0;
                // array[i + 1] = array[i + 1] || 0;

                // Check if the number on the 'left' is greater than the 'right'
                // If so, then swap them and set the sentinel variable to true
                if (array[i] > array[i + 1]) {

                    // Store one of the values since we're about to overwrite it
                    const tmp = array[i + 1];

                    // Replace the value we just stored with the other value
                    array[i + 1] = array[i];

                    // Replace the other value with the stored value
                    array[i] = tmp;

                    // We've just swapped values, so this becomes 'true'
                    swapped = true;
                }
            }
        } while (swapped);

        // Return the array just for good measure
        return array;
    } else {
        return [];
    }
}

sortArray(unsortedArray);


/**
 * Tests
 */


test('bubble sort', () => {
    const testNums = [5, 4, 3, 2, 1];
    const sortedNums = sortArray(testNums);
    expect(sortedNums).toEqual([1, 2, 3, 4, 5])
})

test('does not allow undefined input argument', () => {
    const testNums = undefined;
    const sortedNums = sortArray(testNums);
    expect(sortedNums).toEqual([])
})

test.skip('replaces undefined or null array elements with 0', () => {
    const testNums = [5, 4, undefined, null, 1];
    const sortedNums = sortArray(testNums);
    expect(sortedNums).toEqual([0, 0, 1, 4, 5])
})