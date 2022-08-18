// Prototypes
// Prototypes: to achieve inheritance we use prototypes. i.e which is not mine i can use it

//ES5
function robot(name){
    this.name=name;
    this.legs =2;
    this.color='White'
}

var pepper = new robot('Pepper')

function human(name){
    this.name=name;
    this.city="NewYork"
}

var john = new human('John')


human.prototype = new robot()
var john = new human('John')
john
human {name: "John", city: "NewYork"}
john.legs
2
john.color
"White"

//ES6

class geo{
    constructor(lat, long){
        this.lat=lat;
        this.long=long;
    }
}

class person extends geo{
    constructor(fname, lname, lat, long){
        super(lat, long)
        this.fname=fname;
        this.lname=lname;
    }
}