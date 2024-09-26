import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import { Region } from '../components/Region';
import Countries from '../components/Countries';
import { useGetCountries } from '../customHooks/useReactQuery';
import { Loading } from '../components/Loading';
import Error from '../components/Error';

const Home = () => {
  const { data, isError, isLoading, error } = useGetCountries();
  
  // State to hold search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handler to update search query based on input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter countries based on search query
  const filteredCountries = data?.data.filter((country) =>
    // country.name.toLowerCase().includes(searchQuery)
  Object.values(country)
  .join("")
  .toLowerCase()
  .includes(searchQuery)
  );

  if (isLoading) return <Loading flag={true}/>
  if (isError) return <Error error={error} flag={true}/>

  return (
    <div>
      <Navbar/>
       <div className='mb-3'>   
      <SearchInput handleSearchChange={handleSearchChange} />
      </div>
      

      {/* <Region /> */}
      <Countries data={filteredCountries} />
    </div>
  );
};

export default Home;
