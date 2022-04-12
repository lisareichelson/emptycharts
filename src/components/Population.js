import React, { Component } from "react";
//import Dropdown from "react-dropdown";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import react from "react";
Chart.register(...registerables);

//Fill countries with "SELECT name FROM alchoholconsumption" (load in all values for country name)
const countries = [
  { label: "Fruit", value: "fruit" },
  { label: "Vegetable", value: "vegetable" },
  { label: "Meat", value: "meat" },
];
const defaultCountry = countries[0];
let selection = "";
let value = "";

const Population = () => {
  const [value, setValue] = React.useState("fruit");
  const handleChange = (event) => {
    setValue(event.target);
  };

  var varData = 0;

  const navigate = useNavigate();

  const [apiRes, setAPIRes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6969/testAPI")
      .then((res) => res.json())
      .then(setAPIRes);
  }, []);

  const state1 = {
    labels: ["Imports", "2", "3", "4", "5", "6"], //fill with all  values
    datasets: [
      {
        label: "Country 1",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [6500, 59, 8000, 81, 56, varData],
      },
      {
        label: "Country 2",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(95,222,12,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 9000, 4000, 67, 29, 69],
      },
    ],
  };

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
        How is wine import affected by change in population?
      </h1>
      <h1
        style={{
          display: "flex",
          color: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></h1>
      <p>{apiRes[0]}</p>

      <Line
        data={state1}
        options={{
          scales: {
            yAxes: {
              title: {
                display: true,
                text: "Population",
              },
            },
            xAxes: {
              title: {
                display: true,
                text: "Import",
              },
            },
          },
          title: {
            display: true,
            text: "Population Vs Import",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          backgroundColor: "pink",
        }}
      >
        It appears that Wine Import is (Once data is in replace this) correlated
        with population growth.
      </p>

      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

/*const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};
 <div>
        <Dropdown
          options={countries}
          onChange={handleChange}
          value={value}
          placeholder="Select a country..."
        />
      </div>*/

//console.log({ value } + "hi");

export default Population;
