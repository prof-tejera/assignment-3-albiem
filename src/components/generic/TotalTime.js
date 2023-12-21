import React, { useContext } from 'react';
import { TimerContext } from '../../utils/contexts';
import TimeDis from './TimeDis';

const TotalTimeDisplay = () => {
  const { getTotalTimeInSeconds } = useContext(TimerContext);
  const totalTime = getTotalTimeInSeconds();

  return (
    <div>
      <h3>Total Time:</h3>
      <TimeDis time={totalTime} />
    </div>
  );
};

export default TotalTimeDisplay;
