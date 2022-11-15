import React from 'react'

function Mensaje({children}) {
  return (
    <div className='bg-red-600 text-white p-5 w-3/4 text-center text-xl mb-4'>{children}</div>
  )
}

export default Mensaje