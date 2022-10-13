import React from 'react'

const DashboardCard = ({item}) => {
    const {title, percentage, total} = item
  return (
    <div className='border shadow-sm p-4 rounded-md flex flex-col gap-8 dark:shadow-gray-600'>
        <div className='flex justify-between items-center'>
            <p className='text-2xl font-semibold '>{title}</p>
            <p className='text-lg font-semibold'>{total}</p>
        </div>
        <div className='flex justify-between items-center'>
            <p className='text-xl font-bold '>{percentage} %</p>
            <button className='bg-yellow-200 dark:bg-gray-600 text-lg font-semibold rounded-md px-3 py-1'>view info</button>
        </div>
    </div>
  )
}

export default DashboardCard