import React from 'react'
import B from './B';



const A :React.FC= () => {
  return (
    <>
    <div className="container mt-3">
        <h2>component-A</h2>
        <B msg={"mesasge from A"}/>
    </div>
    </>
  )
}

export default A;