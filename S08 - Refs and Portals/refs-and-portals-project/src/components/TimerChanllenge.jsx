import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerRef = useRef();
    const dialog = useRef();

    const timerIsActive =
        timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        //Set timeout based on targetTime and set the timerStarted state to true
        timerRef.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timerRef.current);
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running" : "Time inactive"}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;
