
import './App.css';
// import Dropdown from './components/navbar/navbar';
import Hero from './components/landing/hero';
import PastorsRemarks from './components/landing/pastors';
import UpcomingEvents from './components/landing/upcomingevents';
import Timer from './components/landing/timer/page';


function App() {
  return (
    <div className="App">
     
      <Hero />
      <PastorsRemarks />
      <UpcomingEvents />
      <Timer />
      
      
    </div>
  );
}

export default App;
