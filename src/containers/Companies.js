import React, { Component } from "react"
import { withRouter } from "react-router";
import { observer, inject } from "mobx-react"
import CompanyList from '../components/CompanyList';
import '../css/company.css';

@inject(stores => ({
  company: stores.company,
  user: stores.user
}))
@observer
class Companies extends Component {

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

    return <div className='companyListContainer'>
      <div>
        <h3>Company List</h3>
        <h3>user: {user.user.name}</h3>
        <button onClick={this.props.history.goBack}>back</button>
      </div>
      <div>
        <CompanyList companies={company.companies}/>
        <div className='btnShowMore' onClick={this.handleShowMore}>Show More</div>
      </div>
    </div>
  }
}

export default withRouter(Companies);
