import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';
import './Graphe.css';


Chart.register(ArcElement);

const config={
    data : {
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(10, 10, 116)',
          'rgb(220, 235, 15)',
          'rgb(255, 165, 0)'
        ],
      }]
    }
}



export default function Graph() {
  return (
            <fieldset className='graphe'>
              <legend><h2>Graphe</h2></legend>
                <div className='chart'><Doughnut {...config}></Doughnut></div>
            </fieldset>
  )
}