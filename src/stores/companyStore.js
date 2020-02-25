import { autorun, observable, action, configure } from "mobx"

// configure({ enforceActions: true });

class CompanyStore {
  @observable companies = [];

  constructor(root) {
    this.root = root;
  }

  @action setCompanies = companies => {
    this.companies = this.companies.concat(companies);
  };

  @action
  fetchCompanies() {
    const url = 'http://localhost:4000/api/companies';

    const options = {
      method: "GET"
    };
    fetch(encodeURI(url), options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setCompanies(data);
    });
  }
}

// Debugging Purpose
var store = window.store = new CompanyStore;

autorun(() => {
  console.log(store.companies[0]);
});

export default CompanyStore;
// export default new CompanyStore;
