import React, { createContext, useState, useEffect } from 'react';
import { convertToTotalSeconds } from './helpers';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [countdownTime, setCountdownTime] = useState(0);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [isStopwatchActive, setIsStopwatchActive] = useState(false);
  const [xyTime, setXyTime] = useState(0);
  const [rounds, setRounds] = useState('');
  const [xyRounds, setXyRounds] = useState('');
  //const [tabataRounds, setTabataRounds] = useState('');
  const [currentRound, setCurrentRound] = useState(1);
  const [currentXyRound, setCurrentXyRound] = useState(1);
  const [isXyActive, setIsXyActive] = useState(false);
  const [countdownHours, setCountdownHours] = useState('');
  const [countdownMinutes, setCountdownMinutes] = useState('');
  const [countdownSeconds, setCountdownSeconds] = useState('');
  const [xyHours, setXyHours] = useState('');
  const [xyMinutes, setXyMinutes] = useState('');
  const [xySeconds, setXySeconds] = useState('');
  //const [tabataWorkMinutes, setTabataWorkMinutes] = useState('');
  //const [tabataWorkSeconds, setTabataWorkSeconds] = useState('');
  //const [tabataRestMinutes, setTabataRestMinutes] = useState('');
  //const [tabataRestSeconds, setTabataRestSeconds] = useState(''); 

  //const getTotalTimeInSeconds = () => {
  //  const countdownSeconds = convertToTotalSeconds(countdownHours, countdownMinutes, countdownSeconds);
  //  const xySeconds = convertToTotalSeconds(xyHours, xyMinutes, xySeconds);
  //
  //  const totalSeconds = countdownSeconds + xySeconds + stopwatchTime;
  //  return totalSeconds;
  //};

  const handleStartStopwatch = () => {
    setIsStopwatchActive(true);
  };

  const handleStartCountdown = () => {
    setCountdownTime(convertToTotalSeconds(countdownHours, countdownMinutes, countdownSeconds));
    setIsCountdownActive(true);
  };

  const handleStartXy = () => {
    setXyTime(convertToTotalSeconds(xyHours, xyMinutes, xySeconds));
    setXyRounds(xyRounds);
    setCurrentXyRound(1);
    setIsXyActive(true);
  };

  const handlePauseResumeStopwatch = () => {
    setIsStopwatchActive(!isStopwatchActive);
  };

  const handlePauseResumeCountdown = () => {
    setIsCountdownActive(!isCountdownActive);
  };

  const handlePauseResumeXy = () => {
    setIsXyActive(!isXyActive);
  };

  const handleResetStopwatch = () => {
    setIsStopwatchActive(false);
    setStopwatchTime(0);
  };

  const handleResetCountdown = () => {
    setIsCountdownActive(false);
    setCountdownTime(0);
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  const handleResetXy = () => {
    setIsXyActive(false);
    setXyTime(0);
    setCurrentXyRound(1);
  };

  useEffect(() => {
    let interval = null;
    if (isCountdownActive && countdownTime > 0) {
      interval = setInterval(() => {
        setCountdownTime(prevTime => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (!isCountdownActive || countdownTime === 0) {
      clearInterval(interval);
      if (countdownTime === 0) {
        setIsCountdownActive(false);
      }
    }
    return () => clearInterval(interval);
  }, [isCountdownActive, countdownTime]);

  useEffect(() => {
    let interval = null;
    if (isStopwatchActive) {
      interval = setInterval(() => {
        setStopwatchTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isStopwatchActive]);

  useEffect(() => {
    let interval = null;
    if (isXyActive && xyTime > 0) {
      interval = setInterval(() => {
        setXyTime(prevTime => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (isXyActive && xyTime === 0 && currentXyRound < xyRounds) {
      setCurrentXyRound(prevXyRound => prevXyRound + 1);
      setXyTime(convertToTotalSeconds(xyHours, xyMinutes, xySeconds));
    } else if (!isXyActive || currentXyRound > xyRounds) {
      clearInterval(interval);
      if (currentXyRound > xyRounds) {
        setIsXyActive(false);
        setCurrentXyRound(1);
      }
    }
    return () => clearInterval(interval);
  }, [isXyActive, xyTime, currentXyRound, xyRounds, xyHours, xyMinutes, xySeconds]);

  return (
    <TimerContext.Provider value={{
      hours, setHours, 
      minutes, setMinutes, 
      seconds, setSeconds, 
      stopwatchTime, setStopwatchTime, 
      countdownTime, setCountdownTime, 
      isCountdownActive, setIsCountdownActive, 
      isStopwatchActive, setIsStopwatchActive, 
      xyTime, setXyTime, 
      rounds, setRounds, 
      xyRounds, setXyRounds,
      //tabataRounds, setTabataRounds,
      currentXyRound, setCurrentXyRound, 
      isXyActive, setIsXyActive, 
      handleStartCountdown, 
      handlePauseResumeCountdown, 
      handleResetCountdown, 
      handleStartStopwatch, 
      handlePauseResumeStopwatch, 
      handleResetStopwatch, 
      handleStartXy, 
      handlePauseResumeXy, 
      handleResetXy,
      countdownHours, setCountdownHours,
      countdownMinutes, setCountdownMinutes,
      countdownSeconds, setCountdownSeconds,
      xyHours, setXyHours,
      xyMinutes, setXyMinutes,
      xySeconds, setXySeconds,
      //tabataWorkMinutes, setTabataWorkMinutes,
      //tabataWorkSeconds, setTabataWorkSeconds,
      //tabataRestMinutes, setTabataRestMinutes,
    //  tabataRestSeconds, setTabataRestSeconds,
    }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };