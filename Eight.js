var name="Thiru";

switch(name){
    case("John"):
        console.log("Name John");
        break;
    case("Manisha"):
        console.log("Name Manisha");
        break;
    case("Thiru"):
        console.log("Name Thiru");
        break;
}
// Name Thiru

var a=2;

switch(a%2){
    case 0:
        console.log("Number is even");
        break;
    case 1:
        console.log("Number is odd");
        break;
    case 2:
        console.log("not even nor odd");
        break;
    default:
        console.log("nothing");
}
// Number is even


switch(myDate.getDay()){
    case 1:
        console.log('Its Monday')
        break;
    case 2:
        console.log('Its Tuesday')
        break;
    case 3:
        console.log('Its Wednesday')
        break;
    case 4:
        console.log('Its Thursday')
        break;
    default:
        console.log('Wrong Input')
}
//Its Thursday

var myDate = new Date();

switch(myDate.getDay()){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("No day");
}
//Thursday