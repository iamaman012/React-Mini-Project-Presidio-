import React from "react";

const SearchInput = ({ handleSearchChange }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            className="form-control form-control-lg mb-4 p-2"
            type="text"
            placeholder="Search for a country..."
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
