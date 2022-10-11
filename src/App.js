import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
    const [Days,setDays] = useState(10);
    const [Hours,setHours] = useState(10)
    const [Minutes,setMinutes] = useState(10)
    const [Seconds,setSeconds] = useState(10)

  

  return (
    <div className="App">
        <Clock Days={Days} Hours={Hours} Minutes={Minutes} Seconds={Seconds} />
    </div>
  );
}

export default App;
