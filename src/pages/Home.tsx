import { ReactElement } from 'react'
import Login from '../components/login/Login'
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

