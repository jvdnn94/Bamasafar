import React, { Children } from 'react'

function Sitecontainer({children}) {
  return (
    <div className='container items-center justify-between  mx-auto '>
      {children}
    </div>
  )
}

export default Sitecontainer
