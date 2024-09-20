import React from 'react';

const SearchWidgets = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search widgets..."
        className="w-auto p-2 border rounded-md"
      />
    </div>
  );
};

export default SearchWidgets;