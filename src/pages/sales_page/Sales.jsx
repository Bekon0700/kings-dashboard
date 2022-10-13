import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Table from '../../components/table/Table';


const columns = [
  { field: 'SaleId', headerName: 'Sales id', width: 270 },
  {
    field: 'OrderId',
    headerName: 'Order id',
    width: 350,
  },
  {
    field: 'ProductId',
    headerName: 'Product id',
    width: 230,
  },
  {
    field: 'Quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 230,
  },
];

const Sales = () => {
  const data = useLoaderData()
  return (
    <div className='w-11/12 mx-auto lg:w-full lg:px-4 py-4'>
      <p className='text-2xl pb-4 text-center font-bold'>Sales Table</p>
      <Table rows={data} columns={columns} id='SaleId' height={800} size={25} />
    </div>
  )
}

export default Sales