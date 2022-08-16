function greet(){
    console.log("Hello World!");
}
greet();

///////
function greet(name){ //name is parameter to the greet function
    console.log("Hello" +name);
}
greet(' Thiru');// Thiru is the argument, greet(); is calling the function

/////

function add(a,b){
    console.log(a+b)
}
add(1,2)
// 3

var a=10;
var b=20;
a+b;
// 30

// function
// method
// arrow function
// anonymous function IIFE
// generator function

function add(a,b){
    return a+b;
}
undefined
add(1,2)
// 3
add(20,50);
// 70
add();
NaN
add(a,a);
20
add('a','a');
"aa"

// method ES5
var isEven = function(userInput){
    var output;
    if(userInput%2==0){
        output="Number is even";
    }else{
        output="Number is odd";
    }
    return output;
}
isEven(10);
"Number is even"
isEven();
"Number is odd"
isEven(3);
"Number is odd"
isEven(0);
"Number is even"

// arrow function ES6
var isEven = (userInput) => {
    var output;
    if(userInput%2==0){
        output="Number is even";
    }else{
        output="Number is odd";
    }
    return output;
}
isEven(10);

//basic notation for arrow function in ES6.
() => {

}