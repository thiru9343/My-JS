var a =10 //global scope
function add(a){
    var b = 20  //local scope
    return a+b;
    console.log(b);
}
console.log(a);
