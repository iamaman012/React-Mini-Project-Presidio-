import React from "react";
import Navbar from "../components/Navbar";
import { Country } from "../components/Country";
import { useParams } from "react-router-dom";
import { useGetSpecificCountry } from "../customHooks/useReactQuery";

const CountryInfo = () => {
  const params = useParams();
  const { name } = params;

  const { data, isError, isLoading, error } = useGetSpecificCountry(name);

  return (
    <div>
      <Navbar />
      <Country
        data={data}
        isError={isError}
        isLoading={isLoading}
        error={error}
        flag={true}
      />
    </div>
  );
};

export default CountryInfo;
