import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Table from '../../components/table/Table';

const columns = [
  { field: 'CustomerId', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 170 },
  {
    field: 'Address',
    headerName: 'Address',
    width: 350,
  },
  {
    field: 'City',
    headerName: 'City',
    width: 130,
  },
  {
    field: 'Country',
    headerName: 'Country',
    width: 130,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 450,
  },
  {
    field: 'Active',
    headerName: 'Active',
    width: 180,
  },
];


const Customers = () => {
  const data = useLoaderData()
  return (
    <div className='w-11/12 mx-auto lg:w-full lg:px-4 py-4'>
      <p className='text-2xl pb-4 text-center font-bold'>Customer Table</p>
      <Table rows={data} columns={columns} id='CustomerId' height={800} size={25} />
    </div>
  )
}

export default Customers