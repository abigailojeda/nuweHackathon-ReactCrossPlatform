import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const WeeklyExpenses = () => {
  
 
  const arrow ='assets/img/arrow.svg';
    
    const data = [
      {
        name: 'Mon',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Tue',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Wed',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Thu',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Fri',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Sat',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Sun',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    return (
      <>
      <h2 className='weekly-title'>Weekly expenses</h2>
        <ResponsiveContainer width="100%" height="70%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>

        <div className='more-info-cont'>
          <h5>Total Revenue</h5>
          <h2>$76685.41</h2>
          <h6><img src={arrow}></img>7.00%</h6>

        </div>
        </>
      );
}
