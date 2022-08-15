var a = ["f","g","dg","dh","her"]
var b = [35,34,3,12,75]

var c = ["fd",43,true,false,33,"true",4]

/*
Push => always add in the end of the Array
Pop => always take out form the end of an Array
shift=> always take out from the begining of an Array
unshift => always add at the begining of an Array
*/

var city = ["NewYork","Delhi","London","Amsterdam"]
city.push("Helsinki")

5
city
(5) ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki"]
city.push('Paris')
6
city
(6) ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]

var city = ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
undefined
city.pop()
"Paris"
city
(5) ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki"]


var city = ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.pop(1)
var city = ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.pop(1)
"Paris"
var city = ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.unshift('Nice')
7
city
(7) ["Nice", "NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.shift()
"Nice"
//////////////
/*
slice():
1. .slice(2)- its removes the 2 elements from beginning of the array but, it wont effect actual array
2. .slice(2,5)- return values from index 2 to 5 but, it won't effect actual array

splice():
1. .splice(2,0,'India')- It will a new element India at index 2
2. .splice(2,0,'Hongkong','Huag')- it will add a new elements Hongkong, Huag at index 2
3. .splice(3,2)- it will return element(s) from index 3 to 2 elements after that index
4. .splice(2,1,'AbuDhabi','Brahin') 
EX:     city
    (4) ['Nice', 'NewYork', 'mdp', 'Paris']0: "Nice"1: "NewYork"2: "AbuDhabi"3: "Brahin"4: "Paris"length: 5[[Prototype]]: Array(0)
    city.splice(2,1,'AbuDhabi','Brahin')
    ['mdp']
    city
    (5) ['Nice', 'NewYork', 'AbuDhabi', 'Brahin', 'Paris']

*/
var city = ["Nice", "NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
undefined
city.slice(1)
(6) ["NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city
(7) ["Nice", "NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
// slice(1) will do remove the element from the array but, it won't effect on the actuall array
city.slice(2,5)
(3) ["Delhi", "London", "Amsterdam"]
// return values from index 2 to 5 but, it won't effect actual array
var city = ["Nice", "NewYork", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
undefined
city.splice(2,0,'Dubai')
// it will add a new element Dubai at index 2
city
(8) ["Nice", "NewYork", "Dubai", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.splice(2,0,'Hongkong','Huag')
// it will add a new elements Hongkong, Huag at index 2
city
(10) ["Nice", "NewYork", "Hongkong", "Huag", "Dubai", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.splice(3,2)
(2) ["Huag", "Dubai"]
city

(8) ["Nice", "NewYork", "Hongkong", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.splice(4,1,'AbuDhabi','Brahin')
["London"]

city
(9) ["Nice", "NewYork", "Hongkong", "Delhi", "AbuDhabi", "Brahin", "Amsterdam", "Helsinki", "Paris"]
city
(10) ["Nice", "NewYork", "Wayne", "Jersey", "Dubai", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
city.splice(2,5, "Medampally", "Surjapur");
(5) ["Wayne", "Jersey", "Dubai", "Delhi", "London"]


var city = ["Nice", "NewYork", "Hongkong", "Huag", "Dubai", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]
undefined
city.indexOf('London')
6
city.indexOf('Mumbai')
-1
var city = "Nice, NewYork, Helsinki, Paris"
undefined
city.split(',')
(4) ["Nice", " NewYork", " Helsinki", " Paris"]
var a ="London"
undefined
a.split('')
(6) ["L", "o", "n", "d", "o", "n"]



var a =[1,2,3]
var b = ['a','b','c']
undefined
a+b
"1,2,3a,b,c"
a.concat(b)
(6) [1, 2, 3, "a", "b", "c"]
b.concat(a)
(6) ["a", "b", "c", 1, 2, 3]
var c = ['x','y','z']
undefined
a.concat(b.c)
(4) [1, 2, 3, undefined]
a.concat(b,c)
(9) [1, 2, 3, "a", "b", "c", "x", "y", "z"]

var city = ["Nice", "NewYork", "Hongkong", "Huag", "Dubai", "Delhi", "London", "Amsterdam", "Helsinki", "Paris"]

undefined
city.sort()
(10) ["Amsterdam", "Delhi", "Dubai", "Helsinki", "Hongkong", "Huag", "London", "NewYork", "Nice", "Paris"]
city.reverse()
(10) ["Paris", "Nice", "NewYork", "London", "Huag", "Hongkong", "Helsinki", "Dubai", "Delhi", "Amsterdam"]
city.sort().reverse()
(10) ["Paris", "Nice", "NewYork", "London", "Huag", "Hongkong", "Helsinki", "Dubai", "Delhi", "Amsterdam"]
city
(10) ["Paris", "Nice", "NewYork", "London", "Huag", "Hongkong", "Helsinki", "Dubai", "Delhi", "Amsterdam"]


//Es7
city.includes('Delhi')
true
city.includes('Pune')
false


var a = [2,5,6,9,11,4]

function checkval(val,index,array){
    return val>5
}

console.log(a.some(checkval))
true