import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";






export default function BasicTable(props) {
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    const userid = 47;
    fetch(`/app/getApp?userid=${userid}`)
    .then(res => res.json())
    .then(data => {
      console.log('receved data from server', JSON.stringify(data));
      setRows(data);
    })
    .catch(err => console.log(err));
  },[])
console.log("rows", rows);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell >All Applications</TableCell>
            <TableCell align="right" >Application id</TableCell>
            <TableCell align="right">Stage</TableCell>
            <TableCell align="right">Current Tasks</TableCell>
            <TableCell align="right">Interest</TableCell>
            <TableCell align="right">Interview Questions</TableCell>
            <TableCell align="right">Modified Date</TableCell>
            {/* <TableCell align="right">UserID</TableCell> */}
            <TableCell align="right">JobID</TableCell>
            <TableCell align="right">ResumeID</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Resume Name</TableCell>
            <TableCell align="right">Resume URL</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Remote</TableCell>
            <TableCell align="right">Job Description</TableCell>
            <TableCell align="right">Tech Stack</TableCell>
            <TableCell align="right">Experience Level</TableCell>
            <TableCell align="right">CompanyID</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Company Type</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.applicationid}</TableCell>
              <TableCell align="right">{row.stage}</TableCell>
              <TableCell align="right">{row.currenttasks}</TableCell>
              <TableCell align="right">{row.interest}</TableCell>
              <TableCell align="right">{row.interviewquestions}</TableCell>
              <TableCell align="right">{row.modifieddate}</TableCell>
              {/* <TableCell align="right">{row.userid}</TableCell> */}
              <TableCell align="right">{row.jobid}</TableCell>
              <TableCell align="right">{row.resumeid}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.resumename}</TableCell>
              <TableCell align="right">{row.resumeurl}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.remote.toString()}</TableCell>
              <TableCell align="right">{row.jobdescription}</TableCell>
              <TableCell align="right">{row.techstack}</TableCell>
              <TableCell align="right">{row.experiencelevel}</TableCell>
              <TableCell align="right">{row.companyid}</TableCell>
              <TableCell align="right">{row.companyname}</TableCell>
              <TableCell align="right">{row.companytype}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
