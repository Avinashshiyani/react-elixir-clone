import React from 'react'

function Info() {
  return (
    <div className="flex items-center m-5">
        <img src={require('./images/LOGO Shape.png')} alt="union" /> 
        <span className="text-2xl font-bold">Elixer . DS</span>
    </div>
  )
}

export default Info;