import React from 'react';

const JobBoard = ({ job }) => {
  const langTools = [job.role, job.level];
  if (job.languages) {
    langTools.push(...job.languages);
  }
  if (job.tools) {
    langTools.push(...job.tools);
  }
  return (
    <div className="flex flex-col  bg-teal-300 shadow-md mx-12 my-16 p-6 rounded sm:flex-row ">
      <div>
        <img className='-mt-16 mb-4 w-20 h-20 sm:my-0 sm:w-24 sm:h-24 md:w-24 md:h-24' src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-xl text-rose-500">{job.company}</h3>
        <h2 className="font-bold text-xl my-1">{job.position}</h2>
        <p className="text-gray-500">
          {job.postedAt}  ·  {job.contract}  ·  {job.location}
        </p>
      </div>
      <div className="flex flex-wrap items-center md:justify-end md:ml-auto m-4 pt-4 border-t-2 border-gray-400 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
        {langTools
          ? langTools.map((el) => (
              <span className=" bg-zinc-200 font-bold mr-2 mb-4 p-2 rounded sm:mb-0 text-zinc-600">
                {el}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};
export default JobBoard;
