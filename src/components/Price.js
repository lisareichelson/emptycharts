import React, { Component } from "react";
import { Scatter, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import react from "react";
Chart.register(...registerables);

//Fill countries with "SELECT name FROM alchoholconsumption" (load in all values for country name)
/*const countries = [
  { label: "Fruit", value: "fruit" },
  { label: "Vegetable", value: "vegetable" },
  { label: "Meat", value: "meat" },
];
const defaultCountry = countries[0];
let selection = "";
let value = "";
*/
const Price = () => {
  /*const [value, setValue] = React.useState("fruit");
  const handleChange = (event) => {
    setValue(event.target);
  };*/

  var varData = 0;

  const navigate = useNavigate();

  const [apiRes, setAPIRes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6969/testAPI")
      .then((res) => res.json())
      .then(setAPIRes);
  }, []);

  const state1 = {
    labels: ["winename", "w", "3", "4", "5", "6"], //fill with wine names
    datasets: [
      {
        label: "Country 1",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 89, 81, 56, varData],
      },
      {
        label: "Country 2",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(95,222,12,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 50, 430, 67, 29, 69],
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
        Does the price and quality of wine have a correlation?
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

      <Scatter
        data={state1}
        options={{
          scales: {
            yAxes: {
              title: {
                display: true,
                text: "Mean Review",
              },
            },
            xAxes: {
              title: {
                display: true,
                text: "Mean Price",
              },
            },
          },
          title: {
            display: true,
            text: "Percentage Change Vs Year",
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
        It appears that a wine's price is (Once data is in replace this)
        correlated with it's rated quality.
      </p>

      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

export default Price;
