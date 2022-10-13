import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import DashboardCard from '../../components/dashboard-card/DashboardCard'

const cardData = [
  {
    id: 1,
    title: 'Total sell',
    percentage: 60,
    total: 1547
  },
  {
    id: 2,
    title: 'Total profit',
    percentage: 60,
    total: 1547
  },
  {
    id: 3,
    title: 'Monthly revenue',
    percentage: 60,
    total: 1547
  },
  {
    id: 4,
    title: 'Yearly cost',
    percentage: 60,
    total: 1547
  },
]

const Dashboard = () => {
  const data = useLoaderData()
  return (
    <div className='w-11/12 mx-auto py-4'>
      <div className='flex flex-col gap-8'>
        <p className='text-center text-3xl font-semibold'>Dashboard</p>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {
            cardData.map(el => <DashboardCard key={el.id} item={el} />)
          }
        </div>
        <div>
          <Chart data={data} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard