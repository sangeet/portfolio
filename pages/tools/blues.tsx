import { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";
import { allNotes, bluesScale, generateChords, generateProgression, generateScale, generateScales, majorPentatonic, minorPentatonic, mixolydian, NoteType, Scale, twelveBarBluesProgression } from "../../data/blues/chords";
import { KeyboardVisual } from "./chords";
import { PlayIcon } from "../../components/icons/play";
import { ChordProgressionSection } from "../../sections/music/chord-progression";

const BluesPage = () => {
    const [selectedKey, setselectedKey] = useState<NoteType>("C");
    const progression = generateProgression(twelveBarBluesProgression, selectedKey)
    const allChordNotes = Array.from(new Set(progression.flat()));
    const recommendedScales = [ 
        {
            name: `${allChordNotes[0]} Blues`,
            scale:generateScale(allChordNotes[0], bluesScale),
        },
        {
            name: `${allChordNotes[0]} Pentatonic`,
            scale:generateScale(allChordNotes[0], majorPentatonic),
        },
        {
            name: `${allChordNotes[1]} Blues`,
            scale:generateScale(allChordNotes[1], bluesScale),
        },
        {
            name: `${allChordNotes[1]} Pentatonic`,
            scale:generateScale(allChordNotes[1], majorPentatonic),
        },
        {
            name: `${allChordNotes[2]} Blues`,
            scale:generateScale(allChordNotes[2], bluesScale),
        },
        {
            name: `${allChordNotes[2]} Pentatonic`,
            scale:generateScale(allChordNotes[2], majorPentatonic),
        },
     ]

    return (
        <Layout>
            <div className="max-w-6xl px-5 py-10 lg:px-10 mx-auto lg:my-12 flex flex-col text-slate-300 nm-flat-slate-800-lg rounded-lg shadow-lg bg-pattern gap-10">
                <div className="flex gap-4 flex-wrap">
                    <span>Select Key:</span>
                    {allNotes.map((note, index) =>
                        <button
                            key={`${note}-${index}`}
                            onClick={() => setselectedKey(note)}
                            className="button px-2"
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
                                <KeyboardVisual highlightedNotes={chordNotes} width={150} />
                                <span>{n} ({chordNotes.join(" ")})</span>
                            </div>;
                        }
                        )}
                    </div>
                </div>

                <ChordProgressionSection progresssion={progression} />

                <div className="flex flex-col justify-center">
                    <h2 className="text-lg mb-2">Recommended Scales:</h2>
                    <div className="flex flex-wrap justify-around gap-5">
                        {recommendedScales.map((scale, index) => {
                            return <div className="flex flex-col" key={`${scale.name}-${index}`} >
                                <KeyboardVisual highlightedNotes={scale.scale} width={100} />
                                <span>{scale.name}</span>
                                <span>{scale.scale.join(" ")}</span>
                            </div>;
                        }
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BluesPage;