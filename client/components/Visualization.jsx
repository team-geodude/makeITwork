
import React from 'react';
import { PieChart, Pie } from 'react-minimal-pie-chart';
import { useState, useEffect } from "react";

export default function Visualization(props) {
  const [stage, setStage] = useState([]);
  
  useEffect(()=>{
    const userid = 47;
    fetch(`/app/getStageData?userid=${userid}`)
    .then(res => res.json())
    .then(data => {
      console.log('receved data from server', JSON.stringify(data));
      setStage(data);
    })
    .catch(err => console.log(err));
  },[])
  console.log("stage", stage);
  const colors = ['#ff6666', '#124697', '#fca224', '#eff0f0', '#ff6222'];
  function generateData(stage) {
    const result = [];
    for (let i = 0; i < stage.length; i++) {
      let el = {};
      el.title = stage[i].stage;
      el.value = Number(stage[i].count_by_stage);
      el.color = colors[i];
      result.push(el);
    }
    return result;
  }
  const data = generateData(stage);
  console.log('final data', data)
  return (
    // <PieChart width={700} height={700}>
    //   {/* <Pie data={{stage}} dataKey="stage" outerRadius={250} fill="green" /> */}
    // </PieChart>
    <PieChart 
    animate
              animationDuration={500}
              animationEasing="ease-out"
              center={[50, 50]}
              
    style={{width:'40%', alignSelf:'center'}} label={(data) => data.dataEntry.title} labelStyle={{fontSize:'5px', alignItems:'center'}}
      // data={[
      //   { title: 'In Process', value: 3, color: '#fb8500' },
      //   { title: 'No Offer', value: 1, color: '#ffb703' },
      //   { title: 'Not Start', value: 2, color: '#023047' },
      // ]}
      data={data}
    />
  );  
}


// [
//   {
//       "stage": "in process",
//       "count_by_stage": "1",
//       "total_count": "4"
//   },
//   {
//       "stage": "no offer",
//       "count_by_stage": "1",
//       "total_count": "4"
//   },
//   {
//       "stage": "not start",
//       "count_by_stage": "2",
//       "total_count": "4"
//   }
// ]

//   <PieChart
//   data={{[
//     { title: 'One', value: 10, color: '#E38627' },
//     { title: 'Two', value: 15, color: '#C13C37' },
//     { title: 'Three', value: 20, color: '#6A2135' }
//   ]}}
// />;