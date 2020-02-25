import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import '../css/company.css';

@inject(stores => ({
  company: stores.company,
  user: stores.user
}))
@observer
export default class TodoList extends Component {

  constructor(props) {
    super(props);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  componentDidMount() {
    const { company } = this.props;
    company.fetchCompanies();
  }

  handleShowMore(e) {
    const { company } = this.props;
    company.fetchCompanies();
  }

  render() {
    const { company, user } = this.props;

    const companyList = company.companies.map((item, idx) => (
      <li key={idx}>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.desc}</div>
      </li>
    ));
    return <div className='companyListContainer'>
      <div>
        <h3>Company List</h3>
        <h3>user: {user.user.name}</h3>
      </div>
      <div>
        <ul className='companyList'>
          <li>
            <div>ID</div>
            <div>NAME</div>
            <div>DESC</div>
          </li>
          {companyList}
        </ul>
        <div className='btnShowMore' onClick={this.handleShowMore}>Show More</div>
      </div>
    </div>
  }
}
