import React from 'react'

function ManageTeam() {
  return (

                <div className= "w-96 rounded-2xl space-y-2 border-2 bg-white grid">
                    <div className="text-2xl font-bold border-b-2 border-slate-400 w-96 p-4 text-center">
                        <span className="">Manage Team</span>
                    </div>
                    <div>
                        <span className="p-2">Recent</span>
                    </div>
                    {/* <!-- team images --> */}
                    <div className="flex justify-around w-96 -py-1">
                        
                            <div className="rounded-2xl h-12 w-12 chart__team border-2">
                                <img src={require('../images/plus.png')} alt="image" />
                            </div>
    
                            <div className="rounded-full h-12 w-12  chart__team" >
                                <img src={require('../images/Avatar (1).png')} alt="" />
                            </div>
    
                            <div className="rounded-full h-12 w-12  chart__team" >
                                <img src={require('../images/Avatar (1).png')} alt="" />
                            </div>
    
                            <div className="rounded-full h-12 w-12  chart__team" >
                                <img src={require('../images/Avatar (2).png')} alt="" />
                            </div>
    
                            <div className="rounded-full h-12 w-12  chart__team" >
                                <img src={require('../images/Avatar (3).png')} alt="" />
                            </div>
    
                            <div className="rounded-full h-12 w-12  chart__team" >
                                <img src={require('../images/Avatar (4).png')} alt="" />
                            </div>
                    </div> 
                       {/* <!-- team name div --> */}
                       <div className="flex justify-center space-x-4">
                            <span>Add</span>
                            <span>Dragos</span>
                            <span>Adrina</span>
                            <span>Robert</span>
                            <span>Joy</span>
                            <span>Monica</span>
                       </div>
                </div>
  )
}

export default ManageTeam