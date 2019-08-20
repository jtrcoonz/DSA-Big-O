// Q: What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

/*
A: This algorithm has linear (O(n)) time complexity. We are looking for one item
in the array, so we have to loop through the array using a search condition (if). 
At most, there is a 1 to 1 correlation between the number of items in the array
and the ammount of time it will take to complete the function. 1 item, 1 tick of time,
2 item, 2 ticks, and so on.
*/