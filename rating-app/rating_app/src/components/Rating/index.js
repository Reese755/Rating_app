import React, { Component } from "react";
import Chart from "react-apexcharts";
import './rating.css'; // Import your CSS for styling

class Rating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Options for the first chart (Average Rating & Average Rating of Others)
      options1: {
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
      series1: [
        {
          name: "Average Rating Data",
          data: [6.5, 5] // Corresponding data for "Average Rating" and "Average Rating of Others"
        }
      ],

      // Options for the second chart (How Many Times You've Been Rated & How Many People You've Rated)
      options2: {
        colors: ['#11CAE9'],
        chart: {
          id: "chart-2"
        },
        xaxis: {
          categories: ["# of Ratings", "# You've rated"],
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
      series2: [
        {
          name: "Rating Interaction Data",
          data: [100, 200] // Corresponding data for "How Many Times You've Been Rated" and "How Many People You've Rated"
        }
      ],
    //   Third Chart Data
      options3: {
        colors: ['#11CAE9'],
        chart: {
          id: "chart-3"
        },
        xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          labels: {
            style: {
              colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }
          }
        }
      },
      series3: [
        {
          name: "Number of Ratings",
          data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
                 Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
                 Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
                 Math.floor(Math.random() * 100)] // Random whole numbers between 1 and 100
        }
      ],
     // Fourth chart (Averages of Users: Mean & Mode)
     options4: {
        colors: ['#11CAE9'],
        chart: {
          id: "chart-4"
        },
        xaxis: {
          categories: ["Mean", "Mode"],
          labels: {
            style: {
              colors: ['#fff', '#fff'],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff',
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
            }
          }
        }
      },
      series4: [
        {
          name: "Averages of Users",
          data: [5.23, 7] // Mean is 5, Mode is 7
        }
      ]
    };
  }

  render() {
    return (
      <div className="chart-container">
        <div className="row">
          {/* First Chart */}
          <div className="mixed-chart">
            <h3 className="rating-h3">Average Ratings</h3>
            <Chart
              options={this.state.options1}
              series={this.state.series1}
              type="bar"
              width="500"
            />
          </div>

          {/* Second Chart */}
          <div className="mixed-chart">
            <h3 className='rating-h3'>Rating Interactions</h3>
            <Chart
              options={this.state.options2}
              series={this.state.series2}
              type="bar"
              width="500"
            />
            </div>
             {/* Third Chart */}
          <div className="mixed-chart">
            <h3 className="rating-h3">Your Ratings 1-10</h3>
            <Chart
              options={this.state.options3}
              series={this.state.series3}
              type="bar"
              width="500"
            />
            </div>
            {/* Fourth Chart */}
          <div className="mixed-chart">
            <h3 className="rating-h3">Averages of All Users</h3>
            <Chart
              options={this.state.options4}
              series={this.state.series4}
              type="bar"
              width="500"
            />
         </div>
        </div>
      </div>
    );
  }
}

export default Rating;