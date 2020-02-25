import CompanyStore from './companyStore';
import UserStore from './userStore';

class RootStore {
  constructor() {
    this.company = new CompanyStore(this);
    this.user = new UserStore(this);
  }
}

export default RootStore;
