import { red } from '@material-ui/core/colors';
import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = () => {
    const data = {
        labels: ["Jan","Feb","Mar","Apr","May"],
        
        datasets: [
            {
              label: 'Dataset 1',
              data: ['100','200','300','400','500'],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Dataset 2',
              data: ['200','400','500','100','400'],
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],          
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            // position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Bar chart data',
          
            
          },
        },
        scales: {
            x: {               
                title: {
                    display: true,
                    text: 'Energy Types',
                    color:'red',
                    font: {
                        size: 24
                    }
                },               
            },
            y: {
                title: {
                    display: true,
                    text: 'Energy consumptions',
                    color:'red'
                },   
            }
        }    
       
    };

    return (
        <>       
            <Bar  
                data={data}  options={options}         
            />
        </>
      
    );
}

export default BarChart;