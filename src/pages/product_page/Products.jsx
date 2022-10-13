import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Table from '../../components/table/Table'

const columns = [
  { field: 'ProductId', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 300 },
  {
    field: 'ManufacturedCountry',
    headerName: 'Manufactured Country',
    width: 260,
  },
  {
    field: 'WeightGrams',
    headerName: 'Weight in grams',
    type: 'number',
    width: 390,
  },
];


const Products = () => {
  const data = useLoaderData()
  return (
    <div className='w-11/12 mx-auto lg:w-full lg:px-4 py-4'>
      <p className='text-2xl pb-4 text-center font-bold'>Product Table</p>
      <Table rows={data} columns={columns} id='ProductId' height={500} size={6} />
    </div>
  )
}

export default Products