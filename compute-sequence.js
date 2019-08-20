// Q: What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

/*
A: This function is creating an array that houses the fibonacci number sequence,
up until the number that is passed to the function. Its runtime complexity is linear
(O(n)), because, while it is following a more complex ruleset, it really is just
the summation of 2 numbers up to a specified point. As the size of the number input
grows, so will the number of processes proportionally.
*/