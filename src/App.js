import logo from './logo.svg';
import './App.css';
import Dropdown from './components/navbar/navbar';
import Hero from './components/hero/hero';
// import PastorsRemarks from './components/hero/pastors';


function App() {
  return (
    <div className="App">
     
      <Hero />

      <Dropdown />
      {/* <PastorsRemarks /> */}
      
      
    </div>
  );
}

export default App;
