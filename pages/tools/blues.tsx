import { useEffect, useRef, useState } from "react";
import { Layout } from "../../components/layout/layout";
import { allNotes, bluesScale, generateChords, generateProgression, generateScale, generateScales, majorPentatonic, minorPentatonic, mixolydian, NoteType, Scale } from "../../data/blues/chords";
import { twelveBarBluesProgressions } from "../../data/blues/progressions";
import { KeyboardVisual } from "../../components/music/keyboard-visual";
import { ChordProgressionSection } from "../../sections/music/chord-progression";

const BluesPage = () => {
    const [selectedKey, setselectedKey] = useState<NoteType>("C");
    const [selectedProgression, setSelectedProgression] = useState(twelveBarBluesProgressions[0])
    const progression = generateProgression(selectedProgression.progression, selectedKey)
    // Get unique chords by root and type
    const allChordsInProgression = progression
        .flat()
        .filter((chord, idx, arr) =>
            arr.findIndex(c => c.root === chord.root && c.type === chord.type) === idx
        );

    console.log(allChordsInProgression)

    return (
        <Layout>
            <div className="max-w-6xl px-5 py-10 lg:px-10 mx-auto lg:my-12 flex flex-col text-slate-300 nm-flat-slate-800-lg rounded-lg shadow-lg bg-pattern gap-5">
                <div className="flex gap-4 flex-wrap">
                    <span>Select Key:</span>
                    {allNotes.map((note, index) =>
                        <button
                            key={`${note}-${index}`}
                            onClick={() => setselectedKey(note)}
                            className={`button px-2 ${note === selectedKey ? "border border-gray-500" : ""}`}
                        >{note}</button>
                    )}
                </div>
                <div className="flex gap-4 flex-wrap">

                    <span>Select Progression Variant:</span>
                    {twelveBarBluesProgressions.map((prog, index) =>
                        <button
                            key={`${prog.name}-${index}`}
                            onClick={() => setSelectedProgression(prog)}
                            className={`button px-2 ${prog.name === selectedProgression.name ? "border border-gray-500" : ""}`}
                        >{prog.name}</button>
                    )}
                </div>

                <div className="flex justify-center my-8">
                    <div className="flex flex-wrap sm:gap-16 w-full justify-center">
                        {allChordsInProgression.map((chord, index) => {
                            return <div
                                key={`${chord.root}-${index}`}
                            >
                                <KeyboardVisual highlightedNotes={chord.notes} width={150} />
                                <span>{chord.symbol} ({chord.notes.join(" ")})</span>
                            </div>;
                        }
                        )}
                    </div>
                </div>

                <ChordProgressionSection progresssion={progression} />

                <div className="flex flex-col justify-center">
                    <h2 className="text-lg mb-2">Recommended Scales:</h2>
                    <div className="flex flex-wrap justify-around gap-5">
                        {
                            allChordsInProgression
                                .map(chord => ([
                                    selectedProgression.recommendedScales.map(sc => ({
                                        name: `${chord.root} ${sc.name}`,
                                        notes: generateScale(chord.root, sc.scale)
                                    }))
                                ].flat())).flat()
                                .map(scaleData => <ScaleRecommendation {...scaleData} />)
                        }

                    </div>
                </div>
            </div>
        </Layout>
    )
}

const ScaleRecommendation = ({ name, notes }: { name: string, notes: NoteType[] }) => {
    return (

        <div className="flex flex-col">
            <KeyboardVisual highlightedNotes={notes} width={100} />
            <span>{name}</span>
            <span>{notes.join(" ")}</span>
        </div>
    )
}

export default BluesPage;