//1. for ==> simple form to iterate
//2. While ==> It's first check condition and apply logic
//3. do- while ==> logic must runs at least ones and then check the codition
//4. for off ==> new way of for loop
//5. for in ==> used for objects
//6. map ==>
//7. filter ==> 

/*
A "For" Loop is used to repeat a specific block of code a known number of times. 
For example, if we want to check the grade of every student in the class, 
we loop from 1 to that number. 
When the number of times is not known before hand, we use a "While" loop.
*/
var i;
for (i=1;i<=5;i++){
    console.log(i);
}

for (var i=1;i<=5;i++){
    console.log(i);
}

var city=["Wayen", "London","New York", "Medampally", "Surjapur", "Khanapur"];
for (i=0;i<city.length;i++){
    console.log(city[i]);
}

var i=1;
while(i<=5){
    i++;
    console.log(i);
}

///For//
for(i=0;i<10;i++){
    console.log(i)
}

var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

/////While///
var i = 0;
while(i<10){
    console.log(i)
    i++
}

var i=1;
while(i<=5){
    console.log(i);
    i++;
}


var i=1;
while(i<5){
    console.log(i);
    i++;
}


var i=1;
while(i<=5){
    i++;
    console.log(i);
}


var i=1;
while(i<=2){
    i++;
    console.log(i);
}


var i=1;
while(i<3){
    console.log(i);
    i++;
}

//do-while//
/*
This kind of loop is most often used when the test doesn't make any sense until 
the statements have been performed at least once. For most purposes, 
the while loop is preferable. For example, the user can be asked for a 
password by: String input; do { System.

- it will print at lease one
- while loop first check the condition and print
- do while first print then it will check the condition
*/
var i=0;
do{
    console.log(i);
    i++;
}while(i<5){
}

var i=0;
do{
    i++;
    console.log(i);
}while(i<5){
}


var i=0;
do{
    console.log(i);
    i++;
}while(i<5){
    console.log("while log", i);
}



for(var i=0; i<10; i++){
    console.log(i);
}

var i=0;
while(i<10){
    i++
    console.log(i);
};

var i=0;
do{
    console.log(i);
    i++
}while(i<10){

};


var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"]
var i = 0;
do{
    console.log(city[i])
    i++
}while(i<city.length)


var city = ["Paris", "Nice", "NewYork", "London","Dubai", "Delhi", "Amsterdam"];
for(cities of city){
    console.log(cities);
}


}