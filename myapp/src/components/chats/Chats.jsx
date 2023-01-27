import React from 'react'
import ActiveRevenue from './ActiveRevenue';
import TotalRevenue from './TotalRevenue';
import ManageTeam from './ManageTeam';
import TotalExpenses from './TotalExpenses';

function Chats() {
  return (
    // <!-- graph div -->
    <>
    <div className="flex mx-12 justify-center">
        <ActiveRevenue />
        <TotalRevenue/>
    </div>

    <div class="p-5 mx-8 flex justify-center">
        <ManageTeam />
        <TotalExpenses />
    </div>
    </>
  )
}

export default Chats;