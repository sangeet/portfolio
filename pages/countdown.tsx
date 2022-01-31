import { useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState<any>();
  const [hasStarted, setStarted] = useState(false);

  const handleClick = () => {
    if (!hasStarted) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100);
      setIntervalId(id);
      setStarted(true);
    } else {
      clearInterval(intervalId);
      setStarted(false);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const buttonText = hasStarted ? "Stop" : "Start";
  const buttonColor = hasStarted ? "bg-red-700" : "bg-green-700";
  const buttonClasses = "px-5 py-2 rounded-lg text-xl text-slate-300 shadow";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="mb-10 section-heading">Countdown Timer</h1>
      <div className="nm-flat-slate-800-lg p-10 rounded-3xl w-96">
        <div className="relative text-center mx-auto nm-inset-slate-800-sm p-5 rounded-lg text-slate-300 text-3xl">
          {count}
        </div>
        <div className="flex mt-10 justify-evenly">
          <button
            onClick={() => handleClick()}
            className={`${buttonClasses} ${buttonColor} mr-3`}
          >
            {buttonText}
          </button>
          <button
            onClick={() => handleReset()}
            className={`${buttonClasses} bg-slate-700 ml-3`}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countdown;