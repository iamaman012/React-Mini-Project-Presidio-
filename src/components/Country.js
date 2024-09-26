import React, { useCallback, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSpecificCountry,
  useGetCountryByCode,
} from "../customHooks/useReactQuery";
import { getCountryByCode } from "../api/axios";
import { Loading } from "./Loading";
import Error from "./Error";

const Country = () => {
  const params = useParams();
  const { name } = params;
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useGetSpecificCountry(name);

  if (isLoading) return <Loading flag={false} />;
  if (isError) return <Error error={error} flag={false} />;
  const country = data.data[0];

  const handleBorder = async (code) => {
    try {
      const response = await getCountryByCode(code);
      const countryName = response.data.name;
      navigate(`/${countryName}`);
    } catch (err) {
      console.log(err.message);
    }
    
  };

  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="w-50">
          <Link
            to="/"
            className="btn btn-secondary btn-sm  w-25 p-2"
            role="button"
            aria-pressed="true"
          >
            <b> &larr; Back </b>
          </Link>
        </div>
        <section className="row mt-4">
          <section className="col-6 ">
            <img
              src={country.flags.svg}
              className="card-img-top"
              alt="National Flag"
            />
          </section>
          <section className="col-6 d-flex flex-column">
            <h2 className="text-center mb-3">{country.name}</h2>
            <section className="details-block d-flex flex-row mt-3 justify-content-between">
              <ul className="list-unstyled">
                <li>
                  <b>Native Name: </b>
                  {country.nativeName}{" "}
                </li>
                <li>
                  <b>Population: </b> {country.population}
                </li>
                <li>
                  <b>Region: </b>
                  {country.region}{" "}
                </li>
                <li>
                  <b>Sub Region: </b>
                  {country.subregion}{" "}
                </li>
                <li>
                  <b>Capital: </b>
                  {country.capital}{" "}
                </li>
              </ul>
              <ul className="list-unstyled">
                <li>
                  <b>Top Level Domain: </b>
                  {country.topLevelDomain}{" "}
                </li>
                <li>
                  <b>Currenecy: </b>{" "}
                  {country.currencies ? country.currencies[0]?.name : "Unknown"}
                </li>
                <li>
                  <b>Languages: </b>
                  {country.languages
                    ? country.languages[0].name
                    : "unknown"}{" "}
                </li>
                <li>
                  <b>Area: </b>
                  {country.area}{" "}
                </li>
              </ul>
            </section>
            <section className="d-flex flex-column">
              <h4 className="border-countries-title d-block">
                Border Countries:
              </h4>
              <div className="d-flex flex-row flex-wrap">
                {country.borders?.length ? (
                  country.borders.map((country, index) => (
                    <button
                      key={index}
                      className="border-country m-3"
                      onClick={() => handleBorder(country)}
                    >
                      {country}
                    </button>
                  ))
                ) : (
                  <p>No Borders...</p>
                )}
              </div>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Country;
