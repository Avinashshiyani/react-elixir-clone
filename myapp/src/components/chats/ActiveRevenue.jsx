import React from 'react'

function ActiveRevenue() {
  return (
    <div className="border-2 bg-white w-80 rounded-2xl p-2">

            <div className="flex justify-between">
                <span className="text-slate-500">Active Revenue</span>
                <img src={require('../images/more-horizontal.png')} alt="horizontalpng" />
            </div>

            <div className="font-bold text-2xl mt-1">
                <span>$28291</span>
            </div>

            <div className=" flex space-x-6 mt-16 items-end">
                {/* <!-- charts --> */}
                <div className="h-16 w-8 chart__color animation__1 rounded-2xl"></div>
                <div className="h-20 w-8 chart__color animation__3 rounded-2xl"></div>
                <div className="h-28 w-8 chart__color  rounded-2xl"></div>
                <div className="h-16 w-8 chart__color animation__2 rounded-2xl"></div>
                <div className="h-28 w-8 chart__color animation__3 rounded-2xl"></div>
                <div className="h-16 w-8 chart__color animation__1 rounded-2xl"></div>
                <div className="h-24 w-8 chart__color animation__2 rounded-2xl"></div>

            </div>

            <div className="flex space-x-8 mt-2">
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
            </div>

        </div>
  )
}

export default ActiveRevenue;