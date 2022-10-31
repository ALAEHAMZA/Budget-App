import React from "react";
import {Bar} from 'react-chartjs-2';

function Graphe() {
  return (
    <div>
      <Bar
      data={{
        labels:['red','bleu'],
        datasets:[{
          label:'test',
          data:[10,20]
        }]
      }}
        height={400}
        width={600}
      />
    </div>
  )
}


export default Graphe;