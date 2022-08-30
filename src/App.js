import React, { useState } from 'react';
import { data } from './data';
import JobBoard from './components/jobBoard';
import SearchForm from './components/searchForm';
function App() {
  //----for job rendering------------------------
  const [allData, setData] = useState(data);

  //---------Handler Company-----
  const handleFilterCompany = (company) => {
    const filteredData = data.filter((item) => {
      if (item.company.toLowerCase().includes(company.toLowerCase())) {
        return item;
      }
    });
    setData(filteredData);
  };

  //-----handle Role-----
  const handleFilterRole = (role) => {
    const filteredData = data.filter((item) => {
      if (item.role.toLowerCase().includes(role.toLowerCase())) {
        return item;
      }
    });
    setData(filteredData);
  };
  //-------handle language
  const handleFilterLocation = (location) => {
    const filteredData = data.filter((item) => {
      if (item.location.toLowerCase().includes(location.toLowerCase())) {
        return item;
      }
    });
    setData(filteredData);
  };
  return (
    <div>
      <header className="bg-emerald-300 mb-12">
        <img src="/images/bg-header-desktop.svg" />
      </header>
      <SearchForm
        onCompanyFilter={handleFilterCompany}
        onRoleFilter={handleFilterRole}
        onLocationFilter={handleFilterLocation}
      />
      <div>
        {data.length === 0 ? (
          <p>Jobs are Fetching.....</p>
        ) : (
          allData.map((job) => <JobBoard job={job} key={job.id} />)
        )}
      </div>
    </div>
  );
}

export default App;
