import React from 'react';
import '../css/company.css';

const CompanyList = props => {
  const renderCompanyList = props.companies && props.companies.map((item, idx) => (
    <li key={idx}>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.desc}</div>
    </li>
  ));

  return (
    <div className='companyListContainer'>
      <div>
        <ul className='companyList'>
          <li>
            <div>ID</div>
            <div>NAME</div>
            <div>DESC</div>
          </li>
          {renderCompanyList}
        </ul>
      </div>
    </div>
  );
};

export default CompanyList;
