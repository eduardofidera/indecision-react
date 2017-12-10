'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anon';

    _classCallCheck(this, Person);

    this.name = name;
};

var me = new Person('Eduardo Souza');
console.log(me);

var other = new Person();
console.log(other);
