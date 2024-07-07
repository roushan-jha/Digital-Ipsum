import React, { useState } from 'react'
import Chart from 'react-apexcharts';

const RadialBar = ({color}) => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
          width: '150',
          type: 'radialBar',
        },
        series: [72],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: '40%',
            },
            dataLabels: {
              value: {
                show: false,
              },
            },
          },
        },
        stroke: {
          lineCap: 'round',
        },
        colors: [`${color}`],
        labels: [' '],
    });
    
    return (
        <div className='absolute -left-10'>
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="radialBar"
                width={150}
            />
        </div>
    );
}

export default RadialBar