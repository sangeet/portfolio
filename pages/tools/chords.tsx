import { useState } from "react";
import { Layout } from "../../components/layout/layout";
import { allNotes, generateChords, generateScales, NoteType } from "../../data/blues/chords";

const ChordsPage = () => {
  const [selectedNote, setSelectedNote] = useState<NoteType>("C");
  return (
    <Layout>
      <div className="max-w-6xl px-5 py-10 lg:px-10 mx-auto lg:my-12 flex flex-col text-slate-300 nm-flat-slate-800-lg rounded-lg shadow-lg bg-pattern">

        <div className="flex gap-20">
          <div className="flex flex-col">
            <span>Major:</span>
            <KeyboardVisual highlightedNotes={generateChords(selectedNote).majorChord} />
          </div>

          <div className="flex flex-col">
            <span>Minor:</span>
            <KeyboardVisual highlightedNotes={generateChords(selectedNote).minorChord} />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          {allNotes.map((note, index) => (
            <button
              key={`${note}-${index}`}
              onClick={() => setSelectedNote(note)}
              className={`flex flex-col gap-2 items-center p-3 bg-slate-800 nm-interactive ${(selectedNote === note ? "nm-flat-slate-800-lg" : "bg-slate-800")}`}
            >
              <strong className="text-xl">{note}</strong>
              {/* <span>{generateScales(note).majorScale.join(',')}</span> */}
              {/* <span>{generateScales(note).minorScale.join(',')}</span> */}
              <span>Major: {generateChords(note).majorChord.join(" ")}</span>
              <span>Minor: {generateChords(note).minorChord.join(" ")}</span>
            </button>
          ))}
        </div>

      </div>
    </Layout>
  );
}

export const KeyboardVisual = ({ highlightedNotes, octaves = 1 }: { highlightedNotes: NoteType[], octaves?: number }) => {
  return (
    <div className="flex">
      {Array.from(Array(octaves).keys()).map(oct =>
        <div className="flex flex-col" key={`octave-${oct}`}>
          <div className="flex">
            {["Db", "Eb", "_", "Gb", "Ab", "Bb", "_"].map((n, index) =>
              <div className={`translate-x-3 translate-y-12 w-6 h-12 
            ${n === "_" ? "invisible" : "visible"}
          `}
                key={`${n}-${index}`}
              >
                <div className={`w-4 h-full border border-black mx-auto ${highlightedNotes.includes(n as NoteType) ? "bg-yellow-500" : "bg-gray-800"} `} />
              </div>
            )}
          </div>
          <div className="flex">
            {["C", "D", "E", "F", "G", "A", "B"].map((n, index) =>
              <div
                key={`${n}-${index}`}
                className={`border border-black w-6 h-20 ${highlightedNotes.includes(n as NoteType) ? "bg-yellow-400" : "bg-white"} `}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChordsPage;