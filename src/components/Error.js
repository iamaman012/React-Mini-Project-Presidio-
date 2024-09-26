import React from 'react'
import Navbar from './Navbar'

const Error = ({error,flag}) => {
    console.log(error)
  return (
    <div>
        {flag && <Navbar/>}
        <div className='container mt-5'>
            <h2>Something went Wrong..</h2>
            <h1>404</h1>
        </div>
    </div>
  )
}

export default Error