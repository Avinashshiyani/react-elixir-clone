import React from 'react';
import 

function AdminTools() {
  return (
    // <!-- admin tools -->
    <div class="grid justify-start text-sm mt-6 space-y-4 md:px-10 md:text-md">

        <span class="text-sm md:text-lg">Admin Tools</span>

        <div class="flex  items-center space-x-6">
            <img src={require={('./components/images/admintools1.png')} class="h-4 md:h-7" />
            <span>Dashboard</span>
        </div>

        <div class="flex  items-center space-x-6">
            <img src="./components/images/admintools2.png" class="h-4 md:h-7"/>
            <span>Bussiness</span>
        </div>

        <div class="flex  items-center space-x-6">
            <img src="./components/images/admintools3.png" class="h-4 md:h-7" />
            <span>Clients</span>
        </div>

        <div class="flex  items-center space-x-6">
            <img src="./components/images/admintools4.png" class="h-4 md:h-7" />
            <span>Analytics</span>
        </div>

        <div class="flex  items-center space-x-6">
            <img src="./components/images/admintools5.png" class="h-4 md:h-7" />
            <span>Notification</span>
        </div>

    </div>
  )
}

export default AdminTools