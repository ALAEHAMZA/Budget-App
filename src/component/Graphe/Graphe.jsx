import React, {useContext} from "react";
import {Doughnut} from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';
import {AppContext} from '../../context/AppContext';
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


function Graphe() {
  const { expenses } =useContext(AppContext);
  const data = expenses.map(item=> {return item.price})
  const config={
      data : {
      datasets: [{
        data: data,
        backgroundColor: [
          'rgb(10, 10, 116)',
          'rgb(220, 235, 15)',
          'rgb(5, 170, 13)',
          'rgb(75, 170, 19)',
          'rgb(15, 110, 13)',
          'rgb(25, 120, 14)',
          'rgb(35, 130, 15)',
          'rgb(45, 140, 16)',
          'rgb(55, 150, 17)',
          'rgb(65, 160, 18)',
        ],
        hoverOffset: 4
      }]
    }
  }
return (
  <fieldset className='graphe'>
          <legend><h2>Graphe</h2></legend>
          <div className='chart'>
              <Doughnut {...config}></Doughnut>
          </div>

  </fieldset>
)
}

export default Graphe;