class Person
{
    constructor(name = 'Anon'){
        this.name = name;
    }
}

const me = new Person('Eduardo Souza');
console.log(me);

const other = new Person();
console.log(other);