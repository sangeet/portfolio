import { useState } from "react";
import { Layout } from "../../components/layout/layout";
import { allNotes, bluesScale, generateChords, generateProgression, generateScale, generateScales, majorPentatonic, minorPentatonic, mixolydian, NoteType, twelveBarBluesProgression } from "../../data/blues/chords";
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
                Select Key:
                <div className="flex gap-4 flex-wrap">
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

                <div className="flex flex-col items-center text-center">
                    {progression.map(lines => (
                        <div
                            key={lines.join("-")}
                            className="flex gap-2 font-mono"
                        >
                            {lines.map((chord, index) =>
                                <div
                                    key={`${chord}-${index}`}
                                    className="w-12 text-2xl"
                                >{chord}</div>)
                            }
                        </div>
                    ))}
                </div>

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

export default BluesPage;