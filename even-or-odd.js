// Q: What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
}

/*
A: This function has constant (O(1)) runtime complexity, because no matter the
size of the number, it will still take the same amount of processes to find if the
number is even or odd. This also has to do with the nature of the function. The input
will always be a size of 1 because it's 1 number. If we were adding all of the numbers
in an array using a for loop to complete the arithmetic, it would 15 processes for 15
numbers, which would be linear(O(n)) time complexity.
*/