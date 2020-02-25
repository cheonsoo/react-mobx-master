import { autorun, observable, action, configure } from "mobx"

// configure({ enforceActions: true });

class UserStore {
  @observable user = { id: 1, userId: 'chance', name: 'Cheonsoo Park' };
  @observable users = [];

  constructor(root) {
    this.root = root;
  }

  @action setUsers = users => {
    this.users = users;
  };

  @action
  fetchCompanies() {
    const users = [
      { id: 1, name: 'user1' },
      { id: 2, name: 'user2' },
      { id: 3, name: 'user3' },
      { id: 4, name: 'user4' },
    ];
    this.setUsers(users);
  }
}

// Debugging Purpose
var store = window.store = new UserStore;

autorun(() => {
  console.log(store.users[0]);
});

export default UserStore;
