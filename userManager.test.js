const User = require("./user")
const UserManager = require("./userManager")
const UserDB = require("./userDB")

describe("UserManager", () => {

  let mockUserDB;
  let userManager;

  beforeEach(() => {
    mockUserDB = new UserDB();
    userManager = new UserManager(mockUserDB);
  })

  describe('createUser', () => {
    it('1. Ska skapa en ny användare och kontrollerar att den sparas i databasen', () => {
      const username = 'jon';
      const password = '123';

      userManager.createUser(username, password);

      const savedUser = userManager.findUserByName(username);

      expect(savedUser).toEqual(new User(username, password));
    });
  });

  describe('getUser', () => {
    it('2. Ska hämta en användare från databasen baserat på användarnamn', () => {
      const username = 'Per';
      const password = '456';
      const user = new User(username, password);

      const retrievedUser = userManager.findUserByName(username);
      console.log("Test: retrievedUser:", retrievedUser);
      expect(retrievedUser).toEqual(user);
    });

    it('3. Ska returnera null om användaren inte hittas', () => {
      const username = 'doe';
      const retrievedUser = userManager.findUserByName(username);
      expect(retrievedUser).toBeNull();
    });

    it('4. Prova att logga in', () => {
      const username = 'Per';
      const password = '456';
      const user = new User(username, password);
      const loggedInUser = userManager.login(username, password);
      expect(loggedInUser).toBeTruthy();
    });
  });

})