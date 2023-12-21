import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { TimeInput, RoundsInput } from '../generic/Input'
import { TimerContext } from '../../utils/contexts';
import Popup from './Popup';
import Button from './Button';


const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6AC7FC;
  padding: 0px;
  border-radius: 8px;
  border: 1px solid black;
  width: 60%;
  margin: 0 auto;
  min-width: 20%;
  position: relative;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

const TimeInputsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  flex-flow: wrap;
  width: 100%;
`;

const RoundsInputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
  display: flex;
  justify-content: center;
  color: pink;
`;

const PopupButtonContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 110%;
`;


const Panel = ({ showRounds, rounds, timerType, hideInputs = false, showDurationLabel = true, showRoundsLabel = true, showTimeInputs = true, }) => {
  const { hours, minutes, seconds, isCountdownActive, setHours, setMinutes, setSeconds, setRounds, countdownHours, setCountdownHours,
    countdownMinutes, setCountdownMinutes,
    countdownSeconds, setCountdownSeconds,
    xyHours, setXyHours,
    xyMinutes, setXyMinutes,
    xySeconds, setXySeconds,
    xyRounds, setXyRounds,
    tabataRounds, setTabataRounds,
    tabataWorkMinutes, setTabataWorkMinutes,
    tabataWorkSeconds, setTabataWorkSeconds,
    tabataRestMinutes, setTabataRestMinutes,
    tabataRestSeconds, setTabataRestSeconds,
  isXyActive, } = useContext(TimerContext);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const getPopupContent = () => {
    switch (timerType) {
      case 'countdown':
        return <p>This timer will count down from whatever duation of time is entered</p>;
      case 'stopwatch':
        return <p>This timer will time the duration of time passd, from when you start it until it is stopped</p>;
      case 'xyTimer':
        return <p>This timer will count down from whatever duration of time is entered, repeating for as many rounds as are entered</p>;
      case 'tabata':
        return <p>This timer will count down from the first duration of time entered, then the second duration of time entered, and repeat for as mant rounds as are entered</p>;
    }
  };

  return (
    <PanelContainer>
      <PopupButtonContainer>
        <Button onClick={togglePopup}>i</Button>
      </PopupButtonContainer>
      <Popup isVisible={isPopupVisible} onClose={togglePopup}>
        {getPopupContent()}
      </Popup>
      <InputsContainer>
        {showDurationLabel && <Label>Duration entry</Label>}
        {showTimeInputs && (
          <TimeInputsRow>
            {timerType === 'countdown' && (
              <>
                <TimeInput
                  unit="hours"
                  value={countdownHours}
                  onChange={(value) => setCountdownHours(value)}
                  disabled={isCountdownActive}
                  placeholder="HH"
                />
                <TimeInput
                  unit="minutes"
                  value={countdownMinutes}
                  onChange={(value) => setCountdownMinutes(value)}
                  disabled={isCountdownActive}
                  placeholder="MM"
                />
                <TimeInput
                  unit="seconds"
                  value={countdownSeconds}
                  onChange={(value) => setCountdownSeconds(value)}
                  disabled={isCountdownActive}
                  placeholder="SS"
                />
              </>
            )}
            {timerType === 'xyTimer' && (
              <>
                <TimeInput
                  unit="hours"
                  value={xyHours}
                  onChange={(value) => setXyHours(value)}
                  disabled={isXyActive}
                  placeholder="HH"
                />
                <TimeInput
                  unit="minutes"
                  value={xyMinutes}
                  onChange={(value) => setXyMinutes(value)}
                  disabled={isXyActive}
                  placeholder="MM"
                />
                <TimeInput
                  unit="seconds"
                  value={xySeconds}
                  onChange={(value) => setXySeconds(value)}
                  disabled={isXyActive}
                  placeholder="SS"
                />
              </>
            )}
            {timerType === 'tabata' && (
              <>
                <Label>Work Duration</Label>
                 <TimeInputsRow>
                 <TimeInput
                   unit="minutes"
                    value={tabataWorkMinutes}
                    onChange={(value) => setTabataWorkMinutes(value)}
                    placeholder="MM"
                  />
                 <TimeInput
                    unit="seconds"
                    value={tabataWorkSeconds}
                    onChange={(value) => setTabataWorkSeconds(value)}
                    placeholder="SS"
                  />
               </TimeInputsRow>
              <Label>Rest Duration</Label>
               <TimeInputsRow>
               <TimeInput
                  unit="minutes"
                  value={tabataRestMinutes}
                  onChange={(value) => setTabataRestMinutes(value)}
                  placeholder="MM"
                  />
                <TimeInput
                  unit="seconds"
                  value={tabataRestSeconds}
                  onChange={(value) => setTabataRestSeconds(value)}
                  placeholder="SS"
                />
               </TimeInputsRow>
              </>
            )}
          </TimeInputsRow>
        )}
        {showRounds && (
          <>
            {showRoundsLabel && <Label>Rounds entry</Label>}
            <RoundsInputRow>
              <RoundsInput
                value={rounds}
                onChange={(value) => setRounds(value)}
                placeholder="Rounds"
                disabled={isCountdownActive || isXyActive}
              />
            </RoundsInputRow>
          </>
        )}
      </InputsContainer>
    </PanelContainer>
  );
};

export default Panel;