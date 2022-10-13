import React from 'react'
import { DataGrid } from '@mui/x-data-grid'


const Table = ({ rows, columns, id, height, size }) => {
  return (
    <div style={{ height: height, width: '100%' }} className='dark:bg-gray-800  dark:text-white shadow-md dark:shadow-gray-400  -z-10'>
      <DataGrid
        getRowId={(row) => row[id]}
        rows={rows}
        columns={columns}
        pageSize={size}
        rowsPerPageOptions={[10]}
        className='dark:text-white  p-2'
      />
    </div>
  )
}

export default Table