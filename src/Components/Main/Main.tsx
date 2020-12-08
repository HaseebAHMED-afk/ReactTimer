import React, { useState, useEffect } from 'react'
import CalculateTimer from '../Tools/CalculateTimer';
import Controls from '../Controls/Control';
import '../../App.css'

const Main: React.FC = (): JSX.Element => {
      const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
      const [timerArray, setTimerArray] = useState<Array<number|string>>([]);

      useEffect(() => {
           let timeArray: Array<number|string> = CalculateTimer(timeInSeconds);
           setTimerArray(timeArray);
      },[timeInSeconds])

      return (
            <div>
            <div className="time-container">
                  <h1 className="timer">{timerArray[0]}:{timerArray[1]}:{timerArray[2]}</h1>
            </div>
            <Controls time={setTimeInSeconds}/>
            </div>
      )
}

export default Main