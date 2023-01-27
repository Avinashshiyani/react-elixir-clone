import React from 'react'

function BetterResult() {
  return (
    <div className="grid m-5  w-100 space-y-2 mx-28">
                <span className="text-2xl font-bold text-center">Better results with the Design System</span>

                <span className="text-center">
                    Design systems are the secret to creating beautiful, functional design. 
                    Design systems are made up of all the things you need to make a website or app
                     look great and function well.  
                </span>

                <div className="flex justify-between space-x-4 mx-80 items-center">
                    <span className="h-3 w-12 chart__color  rounded-2xl"></span>
                    <span className="h-3 w-3 chart__scrool rounded-full bg-neutral-300"></span>
                    <span className="h-3 w-3 chart__scrool rounded-full bg-neutral-300"></span>
                    <span className="h-3 w-3 chart__scrool rounded-full bg-neutral-300"></span>
                </div>

            </div>
  )
}

export default BetterResult;