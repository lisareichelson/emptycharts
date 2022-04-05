import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";

const countries = ["A", "B", "C"]; //Change to load in all the country datas we have
const defaultCountry = countries[0]; //Change to whatever the U.S. is in the list
let selection = "";

const Consumption = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "grey",
        }}
      >
        Wine Consumption Analysis
      </h1>
      <h1
        style={{
          display: "flex",
          color: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Choose a country:
      </h1>
      <div>
        <Dropdown
          options={countries}
          onChange={(selection = this)}
          value={defaultCountry}
          placeholder="Select a country..."
        />
      </div>
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

console.log(selection);

export default Consumption;
