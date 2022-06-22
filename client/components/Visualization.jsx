
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


export default function Visualization(props) {
  const [rows, setRows] = useState([]);

  const colors = ['#E38627', '#C13C37' ,  '#6A2135',   ];
  
  useEffect(()=>{
    const userid = 35;
    fetch(`/app/getStageData?userid=${userid}`)
    .then(res => res.json())
    .then(data => {
      console.log('receved data from server', JSON.stringify(data));
      setRows(data);
    })
    .catch(err => console.log(err));
  },[])



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

  <PieChart
  data={[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]}
/>;
}