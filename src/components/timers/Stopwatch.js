import React, { useContext } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import { TimerContext } from '../../utils/contexts';
import Panel from '../generic/Panel';

const Stopwatch = () => {
  const { stopwatchTime, isStopwatchActive, handleStartStopwatch, handlePauseResumeStopwatch, handleResetStopwatch } = useContext(TimerContext);
  
  const handleStart = () => {
    handleStartStopwatch();
  };
  return (

    <div>
    <Panel
    isActive={isStopwatchActive}
      timerType="stopwatch"
      showDurationLabel={false}
      showRoundsLabel={false}
      showTimeInputs={false}
    />
    <TimeDis time={stopwatchTime} />
      <ButtonContainer>
        <Button onClick={() => handleStart()} disabled={isStopwatchActive}>Start</Button>
        <Button onClick={handlePauseResumeStopwatch}>{isStopwatchActive ? 'Pause' : 'Resume'}</Button>
        <Button onClick={handleResetStopwatch}>Reset</Button>
      </ButtonContainer>
    </div>
  );
};

export default Stopwatch;