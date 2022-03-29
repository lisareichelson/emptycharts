import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
//import Chart from "chart.js/auto";

//For each graph that you want to make, fill an object as such.
//(Make a function that returns a state object given the labels and datasets,
//keeping the default graph stats same
const state = {
  labels: ["Year1", "Year2", "Year3", "Year4", "Year5.."],
  datasets: [
    {
      label: "Attribute 1",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
    {
      label: "Attribute 2",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(95,222,12,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [0, 9, 40, 67, 29],
    },
  ],
};

export default class ChartGraph extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
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
      </div>
    );
  }
}

//export default Chart;

//Below is a default 2 variable line graph. I have no idea how to resize it.
//MAKe CHANGE: make functions taking in labels and data for each type of graph.
// fun linegraph(dataxaxis, datayaxis, labelxaxis, labelyaxis...)
//and return a chart object that can then be rendered outside.
/*export default class LineChart extends Component {
  chartRef = React.createRef();
  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "line",
      options: {
        plugins: {
          title: {
            display: true,
            text: "Y Axis(units) over X Axis (Units)",
          },
        },
      },
      data: {
        labels: [0, 20, 40, 60, 80, 100, 140], //X Axis Values
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133], //Y Axis Values
            label: "Country 1",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            //fill: False,
          },
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Country 2",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            //fill: False,
          },
          {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Country 3",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            //fill: False,
          },
          {
            data: [6, 3, 2, 2, 7, 0, 16],
            label: "Country 4",
            borderColor: "#c45850",
            backgroundColor: "#d78f89",
            // fill: False,
          },
        ],
      },
    });
  }
  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}*/
