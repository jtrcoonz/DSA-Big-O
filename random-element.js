// Q: What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*
A: This algorithm has constant (O(1)) time complexity because no matter how many
numbers there are in the array, it will take 1 process to grab a random index of
an item in the array and return it.
*/