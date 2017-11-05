const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();

        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'Test1'
        }, {
            id: 2,
            name: 'John',
            room: 'Test2'
        },{
            id: 3,
            name: 'Jane',
            room: 'Test1'
        }];
    });

    it('should add new user', () => {
        var users = new Users();

        var user = {
            id: 435,
            name: 'John',
            room: 'Test'
        }

        var resUser = users.addUsers(user.id, user.name, user.room);

        expect(users.users).toMatchObject([user]);
    });

    it('should remove a user', () => {
        var newUserList = users.removeUser(3);
        var array = [{
            id: 1,
            name: 'Mike',
            room: 'Test1'
        }, {
            id: 2,
            name: 'John',
            room: 'Test2'
        }];

        expect(newUserList).toEqual(array);
    });

    it('should not remove user', () => {
        var newUserList = users.removeUser(3);
        var array =  [{
            id: 1,
            name: 'Mike',
            room: 'Test1'
        }, {
            id: 2,
            name: 'John',
            room: 'Test2'
        }];

        expect(newUserList).toEqual(array);
    });

    
    it('should find user', () => {
        var findUser = users.getUser(1);
        expect(findUser).toMatchObject(users.users[0]);
    });

    it('should not find user', () => {
        var findUser = users.getUser(4);
        expect(findUser).toBeFalsy();
    });

    it('should return names for Test1 room', () => {
        var userList = users.getUserList('Test1');

      //  expect(userList).toBe(['Mike','Jane']);
        expect(userList).toEqual(['Mike','Jane']);
    });

    it('should return names for Test2 room', () => {
        var userList = users.getUserList('Test2');

        expect(userList).toEqual(['John']);
    });    
})