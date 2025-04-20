import React, { Component } from "react";
import Chart from "react-apexcharts";
import './data.css';

class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#11CAE9'],
        chart: {
          id: "chart-1"
        },
        xaxis: {
          categories: ["Average Rating", "Average Rating of Others"],
          labels: {
            style: {
              colors: ['#fff', '#fff'],
              fontSize: '15px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff',
              fontSize: '15px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }
          }
        }
      },
      series: [
        {
          name: "Survey-1 Data",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="chart-container">
        <div className="row">
          <div className="mixed-chart">
            <h3 className="rating-h3">Survey-1 Data</h3>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Data;