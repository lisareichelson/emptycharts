import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
Chart.register(...registerables);
//For each graph that you want to make, fill an object as such.
let state = "";
function fillState(country, attribute1, attribute2) {
  const state = {
    labels: ["Year1", "Year2", "Year3", "Year4", "Year5.."],
    datasets: [
      {
        label: { attribute1 },
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
      {
        label: { attribute2 },
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(95,222,12,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 9, 40, 67, 29],
      },
    ],
  };
}

const LineChart = () => {
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
        label: "test",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [6500, 59, 8000, 81, 56, 90],
      },
      {
        label: "test",
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
    <Line
      data={state1}
      options={{
        title: {
          display: true,
          text: "ChartTitle",
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  );
};
export default LineChart;
