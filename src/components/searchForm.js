import React, { useState } from 'react';

const SearchForm = ({ onCompanyFilter, onRoleFilter, onLocationFilter }) => {
  const [filters, setFilters] = useState({
    company: '',
    role: '',
    location: '',
  });
  const handleInput = (field) => (event) => {
    const { value } = event.target;
    setFilters({
      ...filters,
      [field]: value,
    });
    switch (field) {
      case 'company':
        onCompanyFilter(value);
        break;
      case 'role':
        onRoleFilter(value);
        break;
      case 'location':
        onLocationFilter(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col justify-center gap-x-5 bg-teal-200 shadow-md mx-12 my-6 p-6 rounded md:flex-col lg:flex-row">
      <div className="mb-3 pt-0">
        <label className='text-xl font-bold text-rose-500'>Company</label>
        <input
          type="text"
          placeholder="Search Company Name "
          value={filters.company}
          onChange={handleInput('company')}
          className=" my-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div class="mb-3 pt-0">
        <label className='text-xl font-bold text-rose-500'>Role</label>
        <input
          type="text"
          placeholder="Role :frontend,fullstack"
          value={filters.role}
          onChange={handleInput('role')}
          class=" my-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
      <div class="mb-3 pt-0">
        <label className='text-xl font-bold text-rose-500'>Location</label>
        <input
          type="text"
          placeholder="remote/worldwide/usa"
          value={filters.languages}
          onChange={handleInput('location')}
          class=" my-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
    </div>
  );
};
export default SearchForm;
