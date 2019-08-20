// Q: What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/*
A: This function has linear O(n) time complexity. If there is 1 number in the array,
it will take 1 tick of processing time to double that number. 2 numbers, 2 tickets,
and so on.
*/