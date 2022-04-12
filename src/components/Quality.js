import React, { Component } from "react";
//import Dropdown from "react-dropdown";
import { Scatter, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import react from "react";
Chart.register(...registerables);

const Quality = () => {
  var varData = 0;

  const navigate = useNavigate();

  const [apiRes, setAPIRes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6969/testAPI")
      .then((res) => res.json())
      .then(setAPIRes);
  }, []);

  const state1 = {
    labels: ["review", "Year2", "Year3", "Year4", "Year5", "Year6"],
    datasets: [
      {
        label: "Mean review of wine",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [6500, 59, 8000, 81, 56, varData],
      },
      {
        label: "Wine Consumption (KL)",
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
        Does the quality of wine production in a country and consumption of wine
        in the country have a correlation (in 2019)?
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
                text: "Mean Review of Wine",
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
            text: "Mean Review Vs Consumption in 2019",
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
        It appears that Wine quality is (Once data is in replace this)
        correlated with Wine Consumption in 2019.
      </p>

      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};
export default Quality;
