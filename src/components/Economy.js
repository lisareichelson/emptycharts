import React, { Component } from "react";
//import Dropdown from "react-dropdown";
import { Scatter, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import react from "react";
Chart.register(...registerables);

const Economy = () => {
  var varData = 0;

  const navigate = useNavigate();

  const [apiRes, setAPIRes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6969/testAPI")
      .then((res) => res.json())
      .then(setAPIRes);
  }, []);

  const state1 = {
    labels: ["country1", "USA", "France", "Year4", "Year5", "Year6"], //fill w countries
    datasets: [
      {
        label: "Wine vs Country in 2019",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [6500, 59, 8000, 81, 56, varData],
      },
      /*{
        label: "Wine Consumption (KL)",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(95,222,12,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 9000, 4000, 67, 29, 69],
      },*/
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
        What country produced the best wine in 2019?
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
                text: "Mean Rating",
              },
            },
            xAxes: {
              title: {
                display: true,
                text: "Country",
              },
            },
          },
          title: {
            display: true,
            text: "Country and Mean Wine Reviews",
            fontSize: 20,
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
        It appears that X country produced the best wine in 2019.
      </p>

      <button onClick={() => navigate(-1)}>Go Back Home</button>
    </>
  );
};
export default Economy;
