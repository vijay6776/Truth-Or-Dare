import React from 'react'
import C from './C'
interface IMessages{
    msg:string;
}
const B :React.FC<IMessages>= (props) => {
  return (
    <>
    <div className="container mt-3">
        <h2>component-B {props.msg}</h2>
        <C msg={props.msg}/></div>
    </>
  )
}

export default B