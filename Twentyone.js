// Regex or Regular expressions
// Any kind of validation will be achieved by Regex
// In every programming language we use Regex for validations

/* Regex always start with ^(cap symbol) and always ends with $ (dollar) symbol
therefore, ^$
*/

^[0-9]$ // it validates only 1 digit that is number only

^[0-9]{10}$ // it validates the 10 digit phone number

^([a-z])$ // it validates only 1 letter that is string only and small letters only

^[0-9]+$   // it will validate any number digits, only numbers

^([a-z]+)$ // it validates unlimited length of a word and small letters only

^([a-zA-Z]+)$ // it validates unlimited length of a word and small&caps letters only

^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$
var a="thirupathi9343@gmail.com"
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$");
//["thirupathi9343@gmail.com", "thirupathi9343", "gmail", "com", index: 0, input: "thirupathi9343@gmail.com", groups: undefined]0: "thirupathi9343@gmail.com"1: "thirupathi9343"2: "gmail"3: "com"groups: undefinedindex: 0input: "thirupathi9343@gmail.com"length: 4__proto__: Array(0)

/*
\. is used for excape charactor
{2,5} is min 2 and max 5

*/
var a="a534@#$$$.com"
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$");
// output is null
// 1.Conclusion is if patterns matches then you will get output and if not you will get null
// 2. match() works only for strings 
// 3. if you want to validate a numbers then, first you need to convert into string then validate

var phn = 923895734897
undefined
phn.match("^[0-9]{10}$")
// VM243:1 Uncaught TypeError: phn.match is not a function


var phn = "923895734897"
phn.match("^[0-9]{10}$")
null

var phn = "9238957348"
undefined
phn.match("^[0-9]{10}$")
// ["9238957348", index: 0, input: "9238957348", groups: undefined]


var phn = "9441419754"
phn.match("^[0-9]{10}$")

var textphone=phn.toString();//convert number to string
textphone.match("^[0-9]{10}$");//then validate
//['9441419754', index: 0, input: '9441419754', groups: undefined]  //output