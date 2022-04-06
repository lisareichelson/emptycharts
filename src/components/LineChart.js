import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
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

const state1 = {
  labels: ["Year1", "Year2", "Year3", "Year4", "Year5.."],
  datasets: [
    {
      label: "test",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
    {
      label: "test",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(95,222,12,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [0, 9, 40, 67, 29],
    },
  ],
};

const LineChart = () => {
  //fillState("America", "Consumption", "Time");
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
