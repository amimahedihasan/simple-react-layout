import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataResponse =use(marksPromise)
    const marksData = marksDataResponse.data

    // data processing for the chart
    const marksCharData = marksData.map(studentData =>{
        const student = {
            id:studentData.id ,
            name:studentData.name ,
            physics:studentData.marks.physics,
            chemistry:studentData.marks.chemistry,
            math:studentData.marks.math

        }
        const average = (student.physics + student.chemistry + student.math)/3
        student.average =average
        return student
    })
    console.log(marksCharData)

    
    return (
        <div>
         
            
          <BarChart width={300} height={500} data={marksCharData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="average" fill='yellow'></Bar>
            <Bar dataKey="math" fill='red'></Bar>
            
          </BarChart>
            
        </div>
    );
};

export default MarksChart;