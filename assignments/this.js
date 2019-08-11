/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding: 'this' refers to object to the left side of the '.' that called it
* 2. Explicit: 'this' bound by a function that called it explicitly, i.e 'call', 'bind', 'apply'
* 3. New: inside a constructor function, 'this' refers to the object that is created when the constructor is instantiated
* 4. Wndow: pretty much bad news bears, 'this' refers to the window object :0
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
sayName = function() {
    alert( this.name);
}
window.name = "don't do this";
sayName();

// Principle 2

// code example for Implicit Binding
david = {
    firstName:'david',
    lastName: 'francis',
    handsome: true, 
    checkHandsome: function() {
        if (this.handsome) {
            return true;
        } return false;
    },
    greet: function() {
        if (this.checkHandsome) {
            return `Hi, my name is ${this.firstName} ${this.lastName}, I'm good enough, smart enough, and gosh darnit, people like me.`;
        } return `Hi, my name is ${this.firstName} ${this.lastName}, people say I'm pretty ugly :/`;
    }
}
// Principle 3

// code example for New Binding
function Monster(name, elementalWeakness, hp) {
    this.name = name;
    this.elementalWeakness = elentalWeakness;
    this.hp = hp; 
}

// Principle 4

// code example for Explicit Binding
function attack(obj) {
    console.log(`you attacked ${this.name}`)
}
monster = {
    name: 'troll',
    boss: false
}
attack.call(monster);
