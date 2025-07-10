import { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";
import { allNotes, bluesScale, generateChords, generateProgression, generateScale, generateScales, majorPentatonic, minorPentatonic, mixolydian, NoteType, Scale, twelveBarBluesProgression } from "../../data/blues/chords";
import { KeyboardVisual } from "./chords";

const BluesPage = () => {
    const [selectedKey, setselectedKey] = useState<NoteType>("C");
    const { majorScale } = generateScales(selectedKey);
    const progression = generateProgression(twelveBarBluesProgression, selectedKey)
    const allChordNotes = Array.from(new Set(progression.flat()));
    const recommendedScales = {
        blues: generateScale(selectedKey, bluesScale),
        minorPentatonic: generateScale(selectedKey, minorPentatonic),
        majorPentatonic: generateScale(selectedKey, majorPentatonic),
        mixolydian: generateScale(selectedKey, mixolydian)
    }

    return (
        <Layout>
            <div className="max-w-6xl px-5 py-10 lg:px-10 mx-auto lg:my-12 flex flex-col text-slate-300 nm-flat-slate-800-lg rounded-lg shadow-lg bg-pattern gap-10">
                <div className="flex gap-4 flex-wrap">
                    <span>Select Key:</span>
                    {allNotes.map((note, index) =>
                        <button
                            key={`${note}-${index}`}
                            onClick={() => setselectedKey(note)}
                            className="bg-gray-600 text-gray-200 w-10 px-2 rounded"
                        >{note}</button>
                    )}
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-wrap gap-5">
                        {allChordNotes.map((n, index) => {
                            const chordNotes = generateChords(n).majorChord;
                            return <div
                                key={`${n}-${index}`}
                            >
                                <KeyboardVisual highlightedNotes={chordNotes} />
                                <span>{n} ({chordNotes.join(" ")})</span>
                            </div>;
                        }
                        )}
                    </div>
                </div>

                <ChordProgressionSection progresssion={progression} />

                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-bood">Recommended Scales:</h2>
                    <div className="flex flex-wrap gap-5">
                        {Object.entries(recommendedScales).map(([scaleName, scale], index) => {
                            return <div className="flex flex-col" key={`${scaleName}-${index}`} >
                                <KeyboardVisual highlightedNotes={scale} />
                                <span>{scaleName}</span>
                                <span>({scale.join(" ")})</span>
                            </div>;
                        }
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const ChordProgressionSection = ({ progresssion }: { progresssion: Scale[] }) => {
    const numBars = progresssion.flat().length
    const beatsPerBar = 4;
    const [currentBar, setCurrentBar] = useState(1); //1-(numBars)
    const [currentBarBeat, setCurrentBarBeat] = useState(0); //0-3

    const [timeInterval, setTimeInterval] = useState<NodeJS.Timer | null>(null);
    const metronomeRef = useRef<HTMLAudioElement | null>(null);
    const [bpm, setBpm] = useState(60);
    const timerDurationinMs = 1000 / (bpm / 60);

    // --- Count-in state ---
    const [countIn, setCountIn] = useState(false);
    const [countInBeat, setCountInBeat] = useState(0);
    const countInIntervalRef = useRef<NodeJS.Timer | null>(null);

    useEffect(() => {
        metronomeRef.current = new Audio('/metronome.mp3');
    }, []);

    function playMetronome() {
        if (metronomeRef.current) {
            metronomeRef.current.currentTime = 0;
            metronomeRef.current.play();
        }
    }

    // --- Count-in logic ---
    function startCountIn() {
        setCountIn(true);
        setCountInBeat(0);
        if (countInIntervalRef.current) clearInterval(countInIntervalRef.current);

        let localCount = 0;
        playMetronome();
        countInIntervalRef.current = setInterval(() => {
            localCount += 1;
            setCountInBeat(localCount);
            playMetronome();
            if (localCount >= 4) {
                // Clear count-in timer BEFORE starting main timer
                if (countInIntervalRef.current) {
                    clearInterval(countInIntervalRef.current);
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
            clearInterval(timeInterval);
            setTimeInterval(null); // <-- Fix: allow restart after stop
        }
        if (countInIntervalRef.current) {
            clearInterval(countInIntervalRef.current);
            countInIntervalRef.current = null;
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

    console.log({ numBars, currentBar, currentBarBeat });
    return (
        <>
            <div className="flex gap-5 items-center">
                {/* <button onClick={decreaseBar}>- Bar</button> */}
                {/* <button onClick={increaseBar}>+ Bar</button> */}
                {/* <button>- Beat</button> */}
                {/* <button onClick={increaseBeat}>+ Beat</button> */}
                {/* <span>{currentBar}</span> */}
                {/* <span>{currentBarBeat}</span> */}
                <label htmlFor="bpm-input">BPM:</label>
                <input
                    className="bg-gray-700 w-16 px-2 py-1 text-center"
                    type="number"
                    name="bpm-input"
                    id="bpm-input" value={bpm}
                    onChange={e => setBpm(parseInt(e.target.value))}
                />
                <button onClick={startCountIn} disabled={countIn || timeInterval !== null}>Start</button>
                <button onClick={resetTimer}>Stop</button>
                {countIn && <span className="text-yellow-400"> {countInBeat < 4 ? `Count In: ${countInBeat + 1}` : ""} </span> }
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
                                key={`${chord}-${index}`}
                                className={`w-12 text-2xl pt-1.5  ${isCurrentBar ? "bg-gray-700" : "bg-gray-800"} rounded transition-all duration-100 ease-in`}
                            >
                                <span>{chord}</span>
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
        </>

    )
}

export default BluesPage;