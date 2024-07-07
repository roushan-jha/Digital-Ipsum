import React from 'react'
import Chart from 'react-apexcharts';

const WeeklyChart = () => {
    const options = {
      chart: {
        height: 300,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
            show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '40%',
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
      },
      yaxis: {
        show: false,       
      },
      grid: {
        show: false
      },
      annotations: {
        points: [
          {
            x: 'Tue',
            seriesIndex: 0,
            marker: {
                size: 0
            },
            label: {
              borderColor: '#00E396',
              borderRadius: 10,
              offsetY: -5,
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: '\u2713',
            }
          },
          {
            x: 'Thu',
            seriesIndex: 0,
            marker: {
                size: 0
            },
            label: {
              borderColor: '#00E396',
              borderRadius: 10,
              offsetY: -5,
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: '\u2713',
            }
          },
          {
            x: 'Fri',
            seriesIndex: 0,
            marker: {
                size: 0
            },
            label: {
              borderColor: '#00E396',
              borderRadius: 10,
              offsetY: -5,
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: '\u2713',
            }
          },
        ]
      },
      fill: {
        colors: ['#00E396', '#00E396', '#E0E0E0', '#00E396', '#00E396', '#E0E0E0', '#E0E0E0']
      },
      tooltip: {
        enabled: false,
      },
      title: {
        text: 'Weekly Goal',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238'
        }
      }
    };

    const series = [{
      name: 'Activity',
      data: [30, 40, 25, 40, 40, 20, 30]
    }];
  
    return (
      <div className="w-full p-2 rounded-xl shadow-md" >
        <Chart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
    );
  }

export default WeeklyChart
