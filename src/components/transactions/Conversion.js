import React from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const Conversion = () => {

    const data = [
        { index: 0, name: 'Screens', value: 600 },
        { index:1,  name: 'Pc', value: 150 },
        { index:2,  name: 'Phone', value: 400 },
        { index:3,   name: 'Other', value: 600}
      ];
      
      const COLORS = ['#9013fe', '#fb8832', '#e6e5e6', '#007aff'];


     
      
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
      <>
    <ResponsiveContainer width="100%" height="70%">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>

    <div className='legend-bar'>

        {
          data.map((item) =>(
            <p key={item.name} className='legend-item'>< span >.</span>{item.name}</p>
          ))
        }
    </div>

  </>
  )
}
