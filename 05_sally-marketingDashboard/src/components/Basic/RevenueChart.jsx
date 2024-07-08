import React from 'react'
import Chart from 'react-apexcharts';


const RevenueChart = () => {
    const options = {
        chart: {
            height: 300,
            type: 'area',
            toolbar: {
                show: false,
            }
          },
          forecastDataPoints: {
            count: 0
          },
          stroke: {
            width: 5,
            curve: 'smooth',
            linecap: 'round',
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            type: 'datetime',
            show: false,
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000'],
            tickAmount: 10,
            labels: {
              formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              },
              show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            show: false
          },
          tooltip: {
            enabled: true,
          },
          fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
          },
          colors: ['#00E396']
    }

    const series = [{
        name: 'Sales',
        type: 'area',
        data: [4, 3, 10, 9, 22, 12, 18, 9, 12, 7, 27]
    }];

  return (
    <div className='mt-4 bg-slate-50 shadow-sm'>
        <Chart
          options={options}
          series={series}
          type="area"
          height={300}
        />
    </div>
  )
}

export default RevenueChart