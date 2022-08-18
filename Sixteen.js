//1
function sayHi(){
    return "Say Hi JS";
}
console.log(sayHi());
// Say Hi JS
function sayHi(){
    return "Say Hi JS";
}
undefined
function sayHi(a){
    return "Say Hi JS";
}
undefined
sayHi(1)
'Say Hi JS'
sayHi()
'Say Hi JS' //observe without console.log we printed out when given any argument***

//2
//IIFE function
//((){}())   -> IIFE function syntax

(function(){
    console.log("Hello JS");
}())
// Say Hi JS
//**this is self invoking function, we are not calling the function


//3
// Generator function
//(i)
function looping(userInput){
    for(i=0;i<userInput;i++){
       console.log(i); 
    }
};
looping(3);
// 0
// 1
// 2
//note: I don't have any control over here, it will print all
//so I need to control and need to load the data based on need
// put * after function and then yield keyword in place of console.log
//(ii)
function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
  }
undefined
looping(2)
//looping {<suspended>} //wont' print anything
var data = looping(3) //assign to any variable and do data.next() everytime what you need
undefined
data.next()
//{value: 0, done: false}
data.next()
//{value: 1, done: false}
data.next()
//{value: 2, done: false}
data.next()
//{value: undefined, done: true} // when value is undefined and done becomes true then end