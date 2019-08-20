// Q: What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

/*
A: This function is finding out if the passed number is prime or not. First, it checks
to see if the number is less than 2, or a decimal, because those numbers can't be prime
It then checks to see if n can be divided by any of the numbers netween 2 and n. 
If it can be divded with no remainder, it's not a prime. If it can't, it's prime. 
This algorithm has linear (O(n)) time complexity, because the larger the number, 
the more numbers between 2 and n will have to be checked to see if n is prime.
*/