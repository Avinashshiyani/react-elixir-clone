import React from 'react'

function TotalExpenses() {
  return (
    <div className="bg-white p-2 border-2 rounded-2xl -mt-36 -ml-8 grid items-center h-60">
                    
    <div className="flex justify-between">
        <span className="font-bold text-2xl">$63910.25</span>
        <span>
            <img src={require('../images/more-horizontal.png')} alt="image" />
        </span>
    </div>

    <div>
        <span>Total Expences Q2</span>
    </div>

    {/* <!-- charts no images ok--> */}
    <div className="flex space-x-8 items-end justify-around">

        <div className="grid  items-center space-y-2">
            <div className="h-16 w-10 chart__color rounded-lg animation__2"></div>
            <span>May</span>
        </div>

        <div className="grid  text-center space-y-2">
            <div className="h-24 w-10 chart__color rounded-lg"></div>
            <span>June</span>
        </div>

        <div className="grid  text-center space-y-2">
            <div className="h-16 w-10 chart__color__secondary rounded-lg animation__2"></div>
            <span>July</span>
        </div>

        <div className="grid  text-center space-y-2 ">
            <div className="h-24 w-10 chart__color__secondary rounded-lg animation__1"></div>
            <span>August</span>
        </div>
    </div>
</div>
  )
}

export default TotalExpenses