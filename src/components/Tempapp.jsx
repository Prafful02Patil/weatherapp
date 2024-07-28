import React, { useEffect, useState } from "react";
import StreetviewIcon from "@mui/icons-material/Streetview";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=57268bb193b5250b66911fbb785d4dbf`;
      const response = await fetch(url);
      const resjson = await response.json();
      setCity(resjson.main); // Access the 'main' object from the API response
      console.log(resjson);
    };
    fetchapi();
  }, [search]);

  const inputsearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container">
      <div className="Card">
        <div className="inputdata">
          <input
            type="search"
            className="inputfield"
            value={search}
            onChange={inputsearch}
            name="search"
          />
        </div>
        {!city ? (
          <p>Data not found</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location">
                <StreetviewIcon />
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="temp_max">
                Min: {city.temp_min}°C | Max: {city.temp_max}°C
              </h3>
            </div>
            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tempapp;
