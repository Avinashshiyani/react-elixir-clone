import './App.css';
import Info from './components/Info';
import SignUpForm from './components/Signup';
import DontHaveAcc from './components/DontHaveAcc';
import StyleImage from './components/StyleImage';
import Chats from './components/chats/Chats.jsx';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <div class="flex main__div p-3">
      <div class="w-2/5  justify-between space-y-24 ">
        <Info />
        <SignUpForm/>
        <DontHaveAcc />
      </div>

        {/* second section */}
        <div class="chart__div w-3/5">
        <StyleImage />
        <Chats />
        <Footer />
        </div>

    </div>
    </>
  );
}

export default App;
