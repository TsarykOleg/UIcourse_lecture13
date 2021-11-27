'use strict'

function User (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hello = function () {
    alert(`Hello, my firstName is ${this.firstName}, lastName is ${this.lastName} . I am very exited to learn JavaScript!`);
  };
}
const obj = new User('Oleg', 'Tsaryk');
obj.hello();
