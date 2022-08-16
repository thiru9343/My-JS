// for iteration, we use "for loop" this is one way
// the other way of iteration is map.
// map((data) => { return data })
//
var a=["a", "b", "c"];
a.map((data) => { return data })


var fafa=["a", "b", "c"] 
fafa.map((thiru) => { return thiru})

// filter will do filter only nothing else
 
var b=[1,5,3,9,50,2,100,200];
b.filter((data) => {return data>50})



var b = [10,34,52,20,25,36,24]
b.filter((data) => { return data>24 })
[34, 52, 25, 36]


b.map((data) => { return data>24 })
[false, false, false, false, true, false, true, true]

var a = [0,1,2,3]
a.map((data) => { return data*2 })
a.filter((data) => { return data*2 }) //filter won't do nothing here

var a = [0,1,2,3]
a.map((data) => { return data*2 })
(4) [0, 2, 4, 6]
a.filter((data) => { return data*2 })
(3) [1, 2, 3]