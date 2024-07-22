import React from 'react'
interface IMessages{
    msg:string;
}
const C :React.FC<IMessages>= (props) => {
  return (
    <>
    <div className="container mt-3">
        <h2>component-C {props.msg}</h2>
    </div>
    </>
  )
}

export default C