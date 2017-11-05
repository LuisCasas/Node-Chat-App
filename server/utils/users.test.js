const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();

        var user = {
            id: 435,
            name: 'John',
            room: 'Test'
        }

        var resUser = users.addUsers(user.id, user.name, user.room);

        expect(users.users).toMatchObject([user]);
    })
})