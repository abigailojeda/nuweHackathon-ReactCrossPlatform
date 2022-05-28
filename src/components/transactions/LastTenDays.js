import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: '01',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '02',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '03',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '04',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '05',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '06',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '07',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '08',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '09',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export const LastTenDays = () => {

    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={550}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="uv" fill="#9aa5fa" />
        </BarChart>
      </ResponsiveContainer>
    );
}
