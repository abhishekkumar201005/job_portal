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
    <div className="flex bg-teal-300 shadow-md mx-16 my-10 p-8 rounded ">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-xl text-rose-500">{job.company}</h3>
        <h2 className="font-bold text-xl">{job.position}</h2>
        <p className="text-gray-500">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex items-center justify-end ml-auto">
        {langTools
          ? langTools.map((el) => (
              <span className=" bg-zinc-200 font-bold m-2 p-2 rounded text-zinc-600">
                {el}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};
export default JobBoard;
