import React, { useState, useEffect } from 'react';
import data from './Util/data.json';
import JobBoard from './components/jobBoard';
function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, []);
  return (
    <div>
      <header className='bg-emerald-300 mb-12'>
        <img src='/images/bg-header-desktop.svg'/>
      </header>
      <div>
      {jobs.length === 0 ? (
        <p>Jobs are Fetching.....</p>
      ) : (
        jobs.map((job) => <JobBoard job={job} key={job.id} />)
      )}
      </div>

    </div>
  );
}

export default App;
