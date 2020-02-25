import React, { Component } from 'react';
import CompanyList from "./containers/companyList";

export default class App extends Component {
  render() {
    return (
      <div>
        <CompanyList />
      </div>
    );
  }
}