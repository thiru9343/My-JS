// Functional notation
//ES5
function language(name, country){
    this.name=name
    this.country=country

}

let Hindi=new language("Hindi", "India");


Hindi
language {name: "Hindi", country: "India"}

//ES6
class language1{
    constructor(name,country){
        this.name=name;
        this.country=country;
    }
}

let English= new language1("English", "USA");

English
language1 {name: "English", country: "USA"}

// Note: Constructor is the first thing that get called inside the class


var person ={
    fullName:function(){
        return this.firstName+"_"+this.lastname
    }
}

var john={
    firstName:'John',
    lastname:'Ammy'
}

person.fullName.call(john)
"John_Ammy"
person.fullName.apply(john)
"John_Ammy"



var person ={
    fullName:function(city,country){
        return this.firstName+"_"+this.lastname+"_"+city+"_"+country
    }
}

var john={
    firstName:'John',
    lastname:'Ammy'
}

person.fullName.call(john,'Delhi','India')
"John_Ammy_Delhi_India"
person.fullName.call(john,['Delhi','India'])
"John_Ammy_Delhi,India_undefined"
person.fullName.apply(john,['Delhi','India'])
"John_Ammy_Delhi_India"