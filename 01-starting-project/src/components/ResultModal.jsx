import React from "react";
import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef( function ResultModal({ timeTaken, timeRemaining, onReset }, ref) {
  const dialog = useRef();
  
  let userWin = timeRemaining > 0;
  let timeRemains = timeRemaining / 1000;
  let score = Math.round((1 - timeRemaining / (timeTaken * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return{
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userWin ? <h2>You Win</h2> : <h2>You Lose</h2>}
      {userWin && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{timeTaken} seconds.</strong>
      </p>
      
      {userWin ? (<p>
        You stopped the timer with <strong>{timeRemains.toFixed(2)} seconds left.</strong>
      </p>) : (<p>
        You are not able to stop the timer in given time.
      </p>)}
     
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>, 
    document.getElementById("modal")
  );
  
} ) 

export default ResultModal;
