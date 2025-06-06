import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";
import { useState } from "react";

export default function Search({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY = "de8f90b623049e51dc07c31b1fd9672e";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResonse = await response.json();

      console.log(jsonResonse);

      let result = {
        city: city,
        temp: jsonResonse.main.temp,
        tempMin: jsonResonse.main.temp_min,
        tempMax: jsonResonse.main.temp_max,
        humidity: jsonResonse.main.humidity,
        feelsLike: jsonResonse.main.feels_like,
        weather: jsonResonse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeatherInfo();
        updateInfo(info);
    } catch (err) {
        setError(true)
    }
  };

  return (
    <div className="search-box">
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          name="city"
          onChange={handleChange}
          required
        ></TextField>
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exist.</p>}
      </form>
    </div>
  );
}
