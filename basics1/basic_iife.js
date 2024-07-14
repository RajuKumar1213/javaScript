// Immediately Invoked Function Expresstions (IIFE)

(function sayHello (){
    // named iife
    console.log("Raju bhai , Hello !");
})(); // semicolon is important to terminate the iife 

(function sayHello2 (){
    console.log("Raju bhai , Hello !");
})();

(()=> {
    // unnamed iife
    console.log("Rahul bhai , Hello !");
})();

((greet)=> {
    // parametric iife
    console.log(`Rahul bhai , Hello ! , ${greet}`);
})("Good Morning")

// ( function definition )( function call ) // SYNTAX , why : to be prevented form the pollutoin of the global scope.