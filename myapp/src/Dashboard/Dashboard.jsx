import React from 'react';
import Info from '../components/Info';
import Input from './Sidebar/Input';
import AdminTools from './Sidebar/AdminTools';

function Dashboard() {
  return (
    <>
    <Info />
    <div className="flex">
        <div className="w-1/4 border-2">
            <div className='menu__div'>

                <Input />
                <AdminTools /> 

            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard;