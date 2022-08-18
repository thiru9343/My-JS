var bob = new Object();
bob.age=10;
bob.city="New York";
bob.setAge=function(newAge){
    this.age=newAge
}

var tony = new Object();
tony.age=20;
tony.city="New Jersy"
tony.setAge=function(newAge){
    this.age=newAge
}

let createAge=function(newAge){
    this.age=newAge
}

var bob = new Object();
bob.age=10;
bob.city="New York";
bob.setAge=createAge;

var tony = new Object();
tony.age=20;
tony.city="New Jersy"
tony.setAge=createAge;
