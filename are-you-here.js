// Q: What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/*
A: This function has polynomial (0(n^k)) time complexity, because of the nested loops.
This is a usual characteristic of polynomial complexity because the nesting
is required to see if an array item that is present in the first array is present in the second, 
meaning if there are 3 arrays, there will be 9 ticks of processing time
to evaluate if the elements are present in all arrays, assign the variables, loop,
through the arrays etc.
*/