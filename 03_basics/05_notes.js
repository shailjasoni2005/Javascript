/*-----------------How does javascript execute code + call stack-----------------------

topic-1:- EXECUTION CONTEXT 
execution context in js means how js will run and execute the file, we created in js. (To run the program js uses two phases:-)
Js is a single threaded language, everything inside this is a process on which we works.

we have:- 
1.Global execution phase.
2.function execution phase.
3.eval execution context.

how program executes in js:-
Cycle 1:- (memory) creation phase = allocates the memory to variables in program.
Cycle 2:- execution phase = In this cycle program is executed, like function calling assigning values ,etc.
and whenever the function is executed then it creates new variable enviornment or execution thread. ANd in this new enviornment these two cycles again repeated.After executing the function this new enviornment gets deleted.
*/