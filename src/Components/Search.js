import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApioptions } from "../api";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  function loadOptions(inputValue) {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApioptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  }

  function handleChange(setData) {
    setSearch(setData);
    onSearchChange(setData);
  }

  return (
    <>
      <AsyncPaginate className=" w-[90%] ml-[10%] mr-[20%]  mt-[67px] sm:w-[80%]  " placeholder="Search for city" debounceTimeout={600} value={search} onChange={handleChange} loadOptions={loadOptions} />
    </>
  );
}

export default Search;
