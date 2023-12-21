// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

  export const startTimer = (setIsActive) => {
    setIsActive(true);
  };
  
  export const pauseTimer = (setIsActive) => {
    setIsActive(false);
  };
  
  export const resumeTimer = (setIsActive) => {
    setIsActive(true);
  };
  
  export const resetTimer = (setIsActive, setTime, setDefaults) => {
    setIsActive(false);
    setTime(0);
    if (setDefaults) setDefaults();
  };

  export const calculateTimeUnits = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    return {
      hours,
      minutes,
      seconds
    };
  };

  export const convertToTotalSeconds = (hours, minutes, seconds) => {
    const hoursInSeconds = (parseInt(hours, 10) || 0) * 3600;
    const minutesInSeconds = (parseInt(minutes, 10) || 0) * 60;
    const secondsInInt = parseInt(seconds, 10) || 0;
    return hoursInSeconds + minutesInSeconds + secondsInInt;
  };

  export const toggleOnOff = (currentState) => {
    return !currentState;
  };

  // export const calculateRestTimeUnits = (totalSeconds) => {
  //   const restHours = Math.floor(totalSeconds / 3600);
  //   const restMinutes = Math.floor((totalSeconds % 3600) / 60);
  //   const restSeconds = totalSeconds % 60;
  //   
  //   return {
  //     restHours,
  //     restMinutes,
  //     restSeconds
  //   };
  // };
  

