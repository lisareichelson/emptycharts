import React from "react";
import Dropdown from "react-dropdown";
import LineChart from "./LineChart.js";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";

const countries = ["A", "B", "C"]; //Change to load in all the country datas we have
const defaultCountry = countries[0]; //Change to whatever the U.S. is in the list
let selection = "";

function set(e) {
  selection = e.value;
  console.log(selection + "set?");
}

const Economy = () => {
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
        Wine & Economy Analysis
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
          onChange={(e) => set(e.target.value)}
          value={defaultCountry}
          placeholder="Select a country..."
        />
      </div>
      <LineChart />
      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

console.log("Hello " + selection);

export default Economy;
