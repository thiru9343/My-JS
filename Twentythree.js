Object
// 1. Literal Notation 
// 2. Constructor Notation 

// literal notation
// add, update and delete property by using .(dot) notation and [](square bracket) notation
var movie = {
    name:'Avengers',
    rating:4.4
}

typeof(movie)
"object"
movie.name
"Avengers"
movie.rating // . notation
4.4
movie
{name: "Avengers", rating: 4.4}
movie.language="English"
"English"
movie
{name: "Avengers", rating: 4.4, language: "English"}
movie.rating = 4.5
4.5
movie
{name: "Avengers", rating: 4.5, language: "English"}
movie.gener="Action"
"Action"
movie
{name: "Avengers", rating: 4.5, language: "English", gener: "Action"}
delete movie.language
true
movie
{name: "Avengers", rating: 4.5, gener: "Action"}

var movie = {
    name:'Avengers',
    rating:4.4
}
undefined
movie["name"] // [] notation
"Avengers"
movie["rating"]
4.4
movie["language"]="English"
"English"
delete movie['rating']
true


// Construction notation

var car = new Object();
car.name="Toyota",
car.color="White"
"White"
car
{name: "Toyota", color: "White"}
car.make=2017
2017
car
{name: "Toyota", color: "White", make: 2017}
car["Price"]=786767
786767
car
{name: "Toyota", color: "White", make: 2017, Price: 786767}
car.price=988783
988783
car
{name: "Toyota", color: "White", make: 2017, Price: 786767, price: 988783}
delete car.Price
true
car
{name: "Toyota", color: "White", make: 2017, price: 988783}
car.price=100000
100000
car
{name: "Toyota", color: "White", make: 2017, price: 100000}

// this key word: 
// this will always looks at same scope
// without this keyword it refers to outside scope

var sayHi = {
    firstName:"Thirupathi",
    lastName:"Kola",
    greet: function(){
        return "Say Hi to JS "
    }
}
sayHi.greet()
"Say Hi to JS"
////
var sayHi = {
    firstName:"Thirupathi",
    lastName:"Kola",
    greet: function(){
        return `Say Hi to JS ${firstName} ${lastName}`
    }
}
sayHi.greet()
/*
VM38732:5 Uncaught ReferenceError: firstName is not defined
    at Object.greet (<anonymous>:5:32)
    at <anonymous>:8:7
*/
var firstName="Manu";
var lastName="Boc"
var sayHi = {
    firstName:"Thirupathi",
    lastName:"Kola",
    greet: function(){
        return `Say Hi to JS ${firstName} ${lastName}`
    }
}
sayHi.greet()
"Say Hi to JS Manu Boc"
/////
var firstName="Manu";
var lastName="Boc"
var sayHi = {
    firstName:"Thirupathi",
    lastName:"Kola",
    greet: function(){
        return `Say Hi to JS ${this.firstName} ${this.lastName}`
    }
}
sayHi.greet()
"Say Hi to JS Thirupathi Kola"

////
var calc = {
    sum:(a,b) => {return a+b},
    sub:(a,b) => {return a-b}
}
calc.sum(1,3)
4
calc.sub(1,2)
-1
/////
var dbquery ={
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name, city VALUES(${data.name},${data.city})`}
}

dbquery.find('Emp')
"Select * from Emp"
dbquery.insert('Emp',{name:'abc',city:'delhi'})
"insert into Emp name, city VALUES(abc,delhi)"