import { useRef, useState } from "react";
import { PlayIcon } from "../../components/icons/play";
import { ChordProgression, Scale } from "../../data/blues/chords";
import { StopIcon } from "../../components/icons/stop";

export const ChordProgressionSection = ({ progresssion }: { progresssion: ChordProgression}) => {
    const numBars = progresssion.flat().length
    const beatsPerBar = 4;
    const [currentBar, setCurrentBar] = useState(1); //1-(numBars)
    const [currentBarBeat, setCurrentBarBeat] = useState(0); //0-3

    const [timeInterval, setTimeInterval] = useState<NodeJS.Timer | null>(null);
    // --- Remove metronomeRef ---
    // const metronomeRef = useRef<HTMLAudioElement | null>(null);
    const audioCtxRef = useRef<AudioContext | null>(null); // <-- AudioContext for metronome
    const [bpm, setBpm] = useState(90);
    const timerDurationinMs = 1000 / (bpm / 60);

    // --- Beep type state ---
    const [beepType, setBeepType] = useState<"square" | "sine" | "triangle">("sine");

    // --- Count-in state ---
    const [countIn, setCountIn] = useState(false);
    const [countInBeat, setCountInBeat] = useState(0);
    const countInIntervalRef = useRef<NodeJS.Timer | null>(null);

    // --- Remove useEffect for Audio preload ---

    // --- Web Audio API Metronome ---
    function playMetronome() {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        if (!ctx) return;

        if (ctx.state === "suspended") {
            ctx.resume();
        }

        // Oscillator beep (no click)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = beepType;
        osc.frequency.value = beepType === "triangle" ? 800 : 1000;
        gain.gain.value = 0.18;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
        osc.onended = () => {
            osc.disconnect();
            gain.disconnect();
        };
    }

    // --- Count-in logic ---
    function startCountIn() {
        setCountIn(true);
        setCountInBeat(0);
        if (countInIntervalRef.current) clearInterval(countInIntervalRef.current as any);

        let localCount = 0;
        playMetronome();
        countInIntervalRef.current = setInterval(() => {
            localCount += 1;
            setCountInBeat(localCount);
            playMetronome();
            if (localCount >= 4) {
                // Clear count-in timer BEFORE starting main timer
                if (countInIntervalRef.current) {
                    globalThis.clearInterval(countInIntervalRef.current as any);
                    countInIntervalRef.current = null;
                }
                setCountIn(false);
                setCountInBeat(0);
                startTimer();
            }
        }, timerDurationinMs);
    }

    function startTimer() {
        setCurrentBar(1);
        setCurrentBarBeat(0);
        playMetronome();
        setTimeInterval(
            setInterval(increaseBeat, timerDurationinMs)
        )
    }

    function resetTimer() {
        setCurrentBar(1);
        setCurrentBarBeat(0);
        setCountIn(false);
        setCountInBeat(0);
        if (timeInterval !== null) {
            globalThis.clearInterval(timeInterval as any);
            setTimeInterval(null);
        }
        if (countInIntervalRef.current) {
            globalThis.clearInterval(countInIntervalRef.current as any);
            countInIntervalRef.current = null;
        }
        // Optionally suspend AudioContext to save battery
        if (audioCtxRef.current && audioCtxRef.current.state === "running") {
            audioCtxRef.current.suspend();
        }
    }

    function increaseBar() {
        setCurrentBar(prevBar => {
            const nextBar = prevBar === numBars ? 1 : prevBar + 1;
            return nextBar
        });
    }

    function decreaseBar() {
        setCurrentBar(prevBar => {
            const nextBar = prevBar === 1 ? numBars : prevBar - 1;
            return nextBar
        });
    }

    function increaseBeat() {
        playMetronome();
        setCurrentBarBeat(prevBarBeat => {
            if (prevBarBeat === beatsPerBar - 1) {
                increaseBar();
                return 0;
            }
            return prevBarBeat + 1;
        });
    }

    return (
        <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="flex sm:flex-col gap-5 items-center border p-3 sm:p-8 rounded border-gray-700">

                {/* Debugging Shortcuts */}
                {/* <button onClick={decreaseBar}>- Bar</button> */}
                {/* <button onClick={increaseBar}>+ Bar</button> */}
                {/* <button>- Beat</button> */}
                {/* <button onClick={increaseBeat}>+ Beat</button> */}
                {/* <span>{currentBar}</span> */}
                {/* <span>{currentBarBeat}</span> */}

                <div className="flex flex-wrap gap-2 items-center">
                    <label htmlFor="bpm-input">BPM:</label>
                    <input
                        className="bg-gray-700 w-16 px-2 py-1 text-center"
                        type="number"
                        name="bpm-input"
                        id="bpm-input" value={bpm}
                        onChange={e => setBpm(parseInt(e.target.value))}
                    />
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                    {/* --- Beep type selector --- */}
                    <label htmlFor="beep-type" className="ml-2">Sound:</label>
                    <select
                        id="beep-type"
                        className="bg-gray-700 px-2 py-1 rounded"
                        value={beepType}
                        onChange={e => setBeepType(e.target.value as any)}
                    >
                        <option value="square">Square</option>
                        <option value="sine">Sine</option>
                        <option value="triangle">Triangle</option>
                    </select>
                </div>
                <div className="flex gap-1 items-center">
                    <button onClick={startCountIn} disabled={countIn || timeInterval !== null} className="button py-2" >
                        <PlayIcon className="h-8 mx-auto" />
                    </button>
                    <button onClick={resetTimer} className="button py-2" >
                        <StopIcon className="h-8 mx-auto" />
                    </button>
                </div>
                {countIn && <span className="text-yellow-400"> {countInBeat < 4 ? `Count In: ${countInBeat + 1}` : ""} </span>}
            </div>
            <div className="flex flex-col gap-4 items-center text-center">
                {progresssion.map((lines, lineNum) => (
                    <div
                        key={lines.join("-").concat(lineNum.toString())}
                        className={`flex gap-x-8 font-mono`}
                    >
                        {lines.map((chord, index) => {
                            const bar = (lineNum * lines.length) + index + 1;
                            const isCurrentBar = bar === currentBar;
                            return <div
                                onClick={() => {
                                    setCurrentBar(bar);
                                    setCurrentBarBeat(0);
                                } }
                                key={index}
                                className={`w-12 text-2xl pt-1.5  ${isCurrentBar ? "bg-gray-700" : "bg-gray-800"} rounded transition-all duration-100 ease-in`}
                            >
                                <span>{chord.symbol}</span>
                                {/* <span>{bar}</span> */}
                                <div className="flex gap-1 justify-between mt-1">
                                    {[0, 1, 2, 3].map(beat =>
                                        <div
                                            key={`bar-${bar}`}
                                            className={`w-full h-1 ${isCurrentBar && (currentBarBeat % beatsPerBar === beat) ? "bg-yellow-500" : "bg-gray-500"} transition-all duration-100 ease-in`}
                                        />)}
                                </div>
                            </div>;
                        })
                        }
                    </div>
                ))}
            </div>
        </div>

    )
}