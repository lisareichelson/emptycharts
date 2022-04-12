import React, { Component } from "react";
//import Dropdown from "react-dropdown";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import react from "react";
Chart.register(...registerables);

const Fertility = () => {
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
    labels: ["Year1", "Year2", "Year3", "Year4", "Year5", "Year6"],
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
        Is fertility rate affected by the percentage wine holds in alcohol
        consumption?
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
                text: "Fertility Rate",
              },
            },
            xAxes: {
              title: {
                display: true,
                text: "Wine Consumption",
              },
            },
          },
          title: {
            display: true,
            text: "Fertility Vs Wine Consumption",
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
        It appears that fertility is (Once data is in replace this) correlated
        with wine consumption.
      </p>

      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};

export default Fertility;
