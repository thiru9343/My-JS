// var make globally available
// let restrict the scope 

var myvar = []

var i
for(var i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}
/*
I m in function  3
I m in function  3
I m in function  3
*/

var myvar = []

var i
for(let i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}
/*
I m in function  0
VM26144:6 I m in function  1
VM26144:6 I m in function  2
*/

var myvar = []

var i
for(var i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    i=j;
    myvar[j]()
}
/*
I m in function  3
I m in function  3
I m in function  3
*/