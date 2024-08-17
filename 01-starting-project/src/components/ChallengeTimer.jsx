import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal';

export default function ChallengeTimer({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();

  // const[isTimerStarted, setIsTimerStarted] = useState(false);
  // const[isGameOver, setIsGameOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();      
  }

  function handleResetTimeRemaining() {
    setTimeRemaining(targetTime * 1000); 
  }

  
  function handleStart() { 
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10)
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
  <>
    <ResultModal
     ref={dialog}
     timeTaken={targetTime} 
     timeRemaining={timeRemaining}
     onReset={handleResetTimeRemaining}
     />

    <section className='challenge'> 
      <h2>{title}</h2>
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={isTimerActive ? 'active' : undefined}>
        {isTimerActive ? 'Time is running' : 'Timer inactive'}
      </p>
    </section>
  </>
  )
}

