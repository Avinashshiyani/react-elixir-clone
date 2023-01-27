import React from 'react'

function TotalRevenue() {
  return (

    <div className="p-2 border-2 h-32 rounded-2xl bg-white m-5">

    <div className=" justify-around flex space-x-12">

        <span className="text-slate-500">Total Revenue</span>

        <div className="bg-green-100 flex space-x-2 text-green-600">
            <img src={require('../images/trending-up.png')} alt="trending up" />
            <span>12.6%</span>
        </div>
        
    </div>

    <div className="grid pt-3">
        <span className="text-2xl font-bold">$2313</span>
        <span className="pt-2">23 orders</span>
    </div>
    
</div>
  )
}

export default TotalRevenue;