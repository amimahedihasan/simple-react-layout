import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
  {
    id: 1,
    name: "Student 1",
    math: 85,
    physics: 78,
    chemistry: 90
  },
  {
    id: 2,
    name: "Student 2",
    math: 72,
    physics: 65,
    chemistry: 80
  },
  {
    id: 3,
    name: "Student 3",
    math: 91,
    physics: 88,
    chemistry: 95
  },
  {
    id: 4,
    name: "Student 4",
    math: 60,
    physics: 55,
    chemistry: 70
  },
  {
    id: 5,
    name: "Student 5",
    math: 88,
    physics: 92,
    chemistry: 85
  },
  {
    id: 6,
    name: "Student 6",
    math: 77,
    physics: 73,
    chemistry: 80
  },
  {
    id: 7,
    name: "Student 7",
    math: 82,
    physics: 79,
    chemistry: 88
  },
  {
    id: 8,
    name: "Student 8",
    math: 68,
    physics: 70,
    chemistry: 75
  },
  {
    id: 9,
    name: "Student 9",
    math: 95,
    physics: 90,
    chemistry: 98
  },
  {
    id: 10,
    name: "Student 10",
    math: 74,
    physics: 68,
    chemistry: 77
  }
];

const ResutltCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'math'}></YAxis>

                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey={"math"} stroke='red'></Line>

            </LineChart>

        </div>
    );
};

export default ResutltCharts;