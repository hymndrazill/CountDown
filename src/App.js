import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
    const [Days,setDays] = useState();
    const [Hours,setHours] = useState()
    const [Minutes,setMinutes] = useState()
    const [Seconds,setSeconds] = useState()

    let interval;
  



    const startTimer = () => {
      const CountDownDate = new Date('December 31, 2022').getTime()
      console.log(CountDownDate)
      interval = setInterval(()=>{
        const now = new Date().getTime();
        const distance = CountDownDate - now;
        console.log(distance)
        const d = Math.floor(distance /(24 *60 *60 *1000));
        const h = Math.floor(distance % (24 * 60 * 60 *1000) /(60*60*1000));
        const m = Math.floor(distance % (60 * 60 * 1000) /(60 * 1000));
        const s = Math.floor(distance % (60 *1000 ) /1000);
        if (distance < 0) {
          // stop timer
          clearInterval(interval.current)
        } else {
          // time change
          setDays(d);
          setHours(h);
          setMinutes(m);
          setSeconds(s);
        }

      })
    }
    useEffect(()=> {
      startTimer();
    },[])
    
    return (
    <div className="App">
        <Clock Days={Days} Hours={Hours} Minutes={Minutes} Seconds={Seconds} />
    </div>
  );
}

export default App;
