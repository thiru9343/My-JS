var a =10 //global scope
function add(a){
    var b = 20  //local scope
    return a+b
}
console.log(a);
console.log(b);


for(i=0;i<10;i++){
    let b = 20 
    console.log(i)
}

console.log(">>>>a ",a)
console.log(">>>>b ",b)

var myvar = []

for(var i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I'm in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}