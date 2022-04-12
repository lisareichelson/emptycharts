import React from "react";
import Dropdown from "react-dropdown";
import LineChart from "./LineChart.js";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const countries = ["A", "B", "C"]; //Change to load in all the country datas we have
const defaultCountry = countries[0]; //Change to whatever the U.S. is in the list
let selection = "";

/*const [value, setValue] = React.useState("example");

const handleChange = (event) => {
  setValue(event.target.value);
};
*/
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
          onChange={this}
          value={this}
          placeholder="Select a country..."
        />
      </div>
      <LineChart />
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

console.log(selection);

export default Consumption;
