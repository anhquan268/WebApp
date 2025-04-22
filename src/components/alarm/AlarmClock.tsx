import React, { useEffect, useRef, useState } from 'react';
import alarmSound1 from './alarm1.mp3';
import alarmSound2 from './alarm2.mp3';
import alarmSound3 from './alarm3.mp3';

const soundOptions = [
  { label: 'Classic Beep', value: alarmSound1 },
  { label: 'Nokia Call', value: alarmSound2 },
  { label: 'iPhone Call', value: alarmSound3 }
];

const AlarmClock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [alarmTime, setAlarmTime] = useState<string>('');
  const [inputTime, setInputTime] = useState<string>('');
  const [alarmSet, setAlarmSet] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('Alarm is off');
  const [selectedSound, setSelectedSound] = useState<string>(soundOptions[0].value);

  const audioRef = useRef<HTMLAudioElement | null>(new Audio(selectedSound));
  const soundChangedRef = useRef<boolean>(false);

  // Update current time and check alarm
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-GB');
      setCurrentTime(formatted);

      if (alarmSet && alarmTime === formatted) {
        if (!audioRef.current || soundChangedRef.current) {
          audioRef.current = new Audio(selectedSound);
          audioRef.current.loop = true;
          soundChangedRef.current = false;
        }
        audioRef.current.play();
        audioRef.current.loop = true;
        setStatus('🔔 Alarm ringing!');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmSet, alarmTime, selectedSound]);

  const stopAlarm = () => {
    setAlarmSet(false);
    setAlarmTime('');
    setStatus('Alarm is off');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
    }
  };

  const handleSetOrStopAlarm = () => {
    // If alarm is ringing, stop it first
    if (alarmSet || status.includes('ringing')) {
      stopAlarm();
    }

    // Then set a new alarm if inputTime is valid
    else { 
      if(inputTime) {
        const timeWithSeconds = inputTime + ':00';
        setAlarmTime(timeWithSeconds);
        setAlarmSet(true);
        setStatus(`Alarm set for ${timeWithSeconds}`);
      }
    }
  };

  const handleSoundChange = (newSound: string) => {
    setSelectedSound(newSound);
    soundChangedRef.current = true;
  };

  return (
    <div className="alarm-container" style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <h1>⏰ Online Alarm Clock</h1>
      <div className="clock" style={{ fontSize: '32px', margin: '20px 0' }}>{currentTime}</div>

      <div className="controls" style={{ marginBottom: '20px' }}>
        <input
          type="time"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
        />
        <button
          onClick={handleSetOrStopAlarm}
          style={{
            padding: '10px 20px',
            backgroundColor: alarmSet || status.includes('ringing') ? 'red' : 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer'
            }}
        >
          {alarmSet || status.includes('ringing') ? 'Stop Alarm' : 'Set Alarm'}
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Select Sound: </label>
        <select
          value={selectedSound}
          onChange={(e) => handleSoundChange(e.target.value)}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          {soundOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <p className="status" style={{ fontWeight: 'bold', fontSize: '18px' }}>{status}</p>
    </div>
  );
};

export default AlarmClock;
