class Person
{
    constructor(name = 'Anon', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${ this.name }.`;
    }
    getDescription(){
        return `${ this.name } is ${ this.age } years old`;
    }
}

class Student extends Person
{
    constructor(name, age, major){
        super(name, age); // super is the parent class
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person
{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += ` im visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student('Eduardo Souza', 13, 'Computer Science');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getGreeting());

const traveler = new Traveler('Eduardo', 23, 'Philadelphia');
console.log(traveler.getGreeting());