const User = require("./user")
const UserManager = require("./userManager")
const UserDB = require("./userDB")

describe("UserManager", () => {

    let mockUserDB;
    let userManager;

    beforeEach( () => {
        mockUserDB = new UserDB();
        userManager = new UserManager(mockUserDB);
    })

    describe('createUser', () => {
        it('1. Ska skapa en ny användare och spara den i databasen', () => {
          const username = 'jon';
          const password = '123';
    
          userManager.createUser(username, password);
    
          const savedUser = mockUserDB.getUser(username);

          //expect(savedUser).toEqual("123", "jon");
          expect(savedUser).toEqual(new User(username, password));
        });
      });

      describe('getUser', () => {
        it('Ska hämta en användare från databasen baserat på användarnamn', () => {
          const username = 'jon';
          const password = '123';
          const user = new User(username, password);
    
          mockUserDatabase.users[username] = user;
    
          const retrievedUser = userManager.getUser(username);
          expect(retrievedUser).toEqual(user);
        });
    
        it('ska returnera null om användaren inte hittas', () => {
          const username = 'doe';
          const retrievedUser = userManager.getUser(username);
          expect(retrievedUser).toBeNull();
        });
      });
    
})