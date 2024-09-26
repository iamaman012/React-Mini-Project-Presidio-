import React from 'react';
import { useNavigate } from 'react-router-dom';

const Countries = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        {
          data.map((country, index) => (
            <div
              className="card mb-4"
              key={index}
              onClick={() => navigate(`/${country.name}`)}
              style={{ width: "18rem" }}
            >
              <div>
                <img
                  src={country.flag}
                  className="card-img-top"
                  alt="National Flag"
                  style={{ height: "12rem", objectFit: "cover" }}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title text-center mt-2">{country.name}</h4>
                <p className='card-text mt-4'> <b>Region : </b> {country.region} </p>
                <p className='card-text'> <b>Population : </b> {country.population} </p>
                <p className='card-text'> <b>Capital : </b> {country.capital} </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Countries;
