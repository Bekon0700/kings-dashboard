import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({data}) => {
    return (
        <div>
            <p className='text-2xl font-semibold text-center pt-4 pb-8'>Our product weigh and manufactured country chart</p>
            <ResponsiveContainer width="100%" height={500}>
            <LineChart
                // width={10}
                // height={10}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="WeightGrams" stroke="#8884d8" strokeDasharray="5 5" />
            </LineChart>
            </ResponsiveContainer>
        </div>
      );
}

export default Chart