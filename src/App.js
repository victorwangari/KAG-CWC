import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import AnimatedBackgroundWithText from './components/hero/hero';
import PastorsRemarks from './components/hero/pastors';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AnimatedBackgroundWithText />
      <PastorsRemarks />
      
      
    </div>
  );
}

export default App;
