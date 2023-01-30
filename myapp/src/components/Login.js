import React from 'react';
import Info from './Info';
import SignUpForm from './Signup';
import DontHaveAcc from './DontHaveAcc';
import StyleImage from './StyleImage';
import Chats from './chats/Chats';
import Footer from './footer/Footer';

function Login() {
  return (
    <div className="flex main__div p-3">
      <div className="w-2/5  justify-between space-y-24 ">
        <Info />
        <SignUpForm/>
        <DontHaveAcc />
      </div>

        {/* second section */}
        <div className="chart__div w-3/5">
        <StyleImage />
        <Chats />
        <Footer />
        </div>
    </div>
  )
}

export default Login