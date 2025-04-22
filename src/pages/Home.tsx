import { ReactElement } from 'react'
import AlarmClock from '../components/alarm/AlarmClock';
import '../App.css';

function Home(): ReactElement {
  return (
    <div className="App">
      <AlarmClock />
    </div>
  );
}

export default Home

