import React, { useContext } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import Panel from '../generic/Panel';
import { TimerContext } from '../../utils/contexts';

const Countdown = () => {
  const { countdownTime, countdownHours, setCountdownHours, countdownMinutes, setCountdownMinutes, countdownSeconds, setCountdownSeconds, isCountdownActive, setHours, setMinutes, setSeconds, handleStartCountdown, handlePauseResumeCountdown, handleResetCountdown } = useContext(TimerContext);
  const handleStart = () => {
    handleStartCountdown();
  };

  return (
      <div>
        <Panel
          isActive={isCountdownActive}
          hours={countdownHours}
          minutes={countdownMinutes}
          seconds={countdownSeconds}
          setHours={setCountdownHours}
          setMinutes={setCountdownMinutes}
          setSeconds={setCountdownSeconds}
          timerType="countdown"
          showDurationLabel={true}
          showRoundsLabel={false}
        />
        <TimeDis time={countdownTime} />
          <ButtonContainer>
            <Button onClick={handleStartCountdown} disabled={isCountdownActive}>Start</Button>
            <Button onClick={handlePauseResumeCountdown}>{isCountdownActive ? 'Pause' : 'Resume'}</Button>
            <Button onClick={handleResetCountdown}>Reset</Button>
          </ButtonContainer>
        </div>
    );
};

export default Countdown;