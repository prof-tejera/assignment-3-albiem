import React, { useContext } from 'react';
import Button, { ButtonContainer } from "../generic/Button";
import TimeDis from '../generic/TimeDis';
import RoundDis from '../generic/RoundDis';
import Panel from '../generic/Panel';
import { TimerContext } from '../../utils/contexts';

const XY = () => {
  const {
    xyTime, xyRounds, currentXyRound, isXyActive, setXyRounds, handleStartXy, handlePauseResumeXy, handleResetXy, xyHours, xyMinutes, xySeconds
  } = useContext(TimerContext);

  return (
    <div>
      <Panel
        hours={xyHours}
        minutes={xyMinutes}
        seconds={xySeconds}
        setXyRounds={setXyRounds}
        xyRounds={xyRounds}
        isActive={isXyActive}
        showRounds={true}
        timerType="xyTimer"
        showDurationLabel={true}
        showRoundsLabel={true}
      />
      <TimeDis time={xyTime} />
      <ButtonContainer>
        <Button onClick={handleStartXy} disabled={isXyActive}>Start</Button>
        <Button onClick={handlePauseResumeXy} disabled={!isXyActive}>{isXyActive ? 'Pause' : 'Resume'}</Button>
        <Button onClick={handleResetXy}>Reset</Button>
      </ButtonContainer>
      {isXyActive && <RoundDis rounds={currentXyRound} totalRounds={xyRounds} />}
    </div>
  );
};

export default XY;