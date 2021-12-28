import './App.css';
import Jeremy from './images/image-jeremy.png';
import GridItem from './components/GridItem/GridItem';
import data from './data.js';
import { useState } from 'react';

function App() {

  const [timeframe, setTimeframe] = useState('daily');

  return <div className="container">
    <div className="grid">
      <div className="grid__item profile">
        <div className="grid__item-profile_card">
          <div className="grid__item-profile_card__img">
            <img src={Jeremy} alt="jeremy" />
          </div>
          <div className="grid__item-profile_card__content">
            <p>Report for</p>
            <h2>Jeremy <br /> Robson</h2>
          </div>
        </div>
        <div className="grid__item-profile_nav">
          <button onClick={()=> setTimeframe('daily')} className={`grid__item-profile_nav__button ${timeframe === 'daily' ? 'active' : null} `}>Daily</button>
          <button onClick={()=> setTimeframe('weekly')} className={`grid__item-profile_nav__button ${timeframe === 'weekly' ? 'active' : null} `}>Weekly</button>
          <button onClick={()=> setTimeframe('monthly')} className={`grid__item-profile_nav__button ${timeframe === 'monthly' ? 'active' : null} `}>Monthly</button>
        </div>
      </div>
      {data.map((item, index) => <GridItem timeframe={timeframe} key={index} data={item} />)}
    </div>
  </div>;
}

export default App;
