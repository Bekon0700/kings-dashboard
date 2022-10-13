import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Table from '../../components/table/Table';

const columns = [
  { field: 'OrderId', headerName: 'Order id', width: 270 },
  {
    field: 'CustomerId',
    headerName: 'Customer id',
    width: 350,
  },
  {
    field: 'Date',
    headerName: 'Date',
    type: 'Date',
    width: 230,
  },
];


const Order = () => {
  const data = useLoaderData()
  return (
    <div className='w-11/12 mx-auto lg:w-full lg:px-4 py-4'>
      <p className='text-2xl pb-4 text-center font-bold'>Order Table</p>
      <Table rows={data} columns={columns} id='OrderId' height={800} size={25} />
    </div>
  )
}

export default Order