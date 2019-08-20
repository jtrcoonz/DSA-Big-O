/* 
Q: Determine the Big O for the following algorithm: You are sitting in a 
room with 15 people. You want to find a playmate for your dog, preferably of 
the same breed. So you want to know if anyone out of the 15 people have the same 
breed as your dog. You stand up and yell out, who here has a golden retriever and 
would like to be a playdate for my golden. Someone yells - "I do, be happy to bring 
him over"

A: This is constant time (O(1)), because no matter amount of people in the room,
you only have to shout once to find the dog you want to find.


Q: Determine the Big O for the following algorithm: You are sitting in a room 
with 15 people. You want to find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You start with the first person and ask him if he has a golden retriever. He says no, 
then you ask the next person, and the next, and the next until you find someone 
who has a golden or there is no one else to ask.

A: This is linear time (O(n)), because there is a 1 to 1 relationship between input
size and number of processes. For ever person in the room, you have to ask that person
1 time, then the next, and the next. So for 15 people, you'll have to ask at most 15
times.
*/