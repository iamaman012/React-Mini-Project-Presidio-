import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchInput from "../components/SearchInput";

import { Countries } from "../components/Countries";
import { useGetCountries } from "../customHooks/useReactQuery";

const Home = () => {
  const { data, isError, isLoading, error } = useGetCountries();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredCountries = data?.data.filter((country) =>
    Object.values(country).join("").toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <Navbar />
      <div className="mb-3">
        <SearchInput handleSearchChange={handleSearchChange} />
      </div>

      <Countries
        data={filteredCountries}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
    </div>
  );
};

export default Home;
