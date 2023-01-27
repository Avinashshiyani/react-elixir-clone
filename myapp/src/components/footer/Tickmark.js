import React from 'react'

function Tickmark() {
  return (
    <div className="bg-red-500 flex justify-center ">
        <div className="rounded-full chart__color  ml-72 -mt-20">
            <img src={require('../images/right_tick.png')} alt="image" className="p-8" />
        </div>
      </div>
  )
}

export default Tickmark;