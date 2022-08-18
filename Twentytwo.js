// Hoisting: with the help Hoisting, "you can use something before you declaring that"

a = 10
var b;
add(a,b)
b = 20 
function add(a,b){
    console.log("a>>inside>>",a)
    console.log("b>>inside>>>",b)
    console.log(a+b)
}

var a;
console.log("a>>>>",a)
console.log("b>>>>>",b)
a>>inside>> 10
b>>inside>>> undefined
NaN
a>>>> 10
b>>>>> 20



///////////
// JAVASCRIPT executes above program as below steps
var a;
var b;
function add(a,b){
    console.log("a>>inside>>",a)
    console.log("b>>inside>>>",b)
    console.log(a+b)
}

a = 10
b = undefined
b = 10

add(a,b) == 20