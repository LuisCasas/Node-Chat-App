[{
    id: '',
    name: 'John',
    room: 'Room 1'
}];

class Users {
    constructor(){
        this.users = [];
    }

    addUsers(id, name, room){
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
}

module.exports = {Users};

/*

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getUserDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

var me = new Person('John', 22);
console.log(me.name, me.age);

var description = me.getUserDescription();
console.log(description);

*/