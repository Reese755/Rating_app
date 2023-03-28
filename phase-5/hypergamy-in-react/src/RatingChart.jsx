import React, { Component } from "react";
import Chart from "react-apexcharts";

class RatingChart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      options: { 
        colors: ['#11CAE9'],
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Your ratings", "Average of others", "number of ratings", "number you've rated"],
          labels: {
          style: {
            colors: ['#fff', '#fff', '#fff', '#fff'],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          }
        }
      }
      },
      series: [
        {
          name: "series-1",
          data: [props.user.average_rating, props.user.average_ratings_of_others, props.user.number_of_ratings, props.user.number_of_people_you_have_rated]
        }
      ]
    };
  }

  render() {
    return (
      <>
      <br/>
      {/* <div>{this.props.user.username}</div> */}
      <div>Average rating for you and others</div>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default RatingChart;