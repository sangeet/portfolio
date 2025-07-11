import { useState } from "react";
import { Layout } from "../../components/layout/layout";
import { allNotes, generateChords, generateScales, NoteType } from "../../data/blues/chords";
import { KeyboardVisual } from "../../components/music/keyboard-visual";

const ChordsPage = () => {
  const [selectedNote, setSelectedNote] = useState<NoteType>("C");
  const allChords = allNotes.map(n => ({ noteName: n, chords: generateChords(n) }))
  const selectedKey = allChords.find(note => note.noteName === selectedNote);
  return (
    <Layout>
      <div className="max-w-6xl px-5 py-10 lg:px-10 mx-auto lg:my-12 flex flex-col text-slate-300 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">

        <div className="flex flex-wrap gap-4 mb-10">
          {allNotes.map((note, index) => (
            <button
              key={`${note}-${index}`}
              onClick={() => setSelectedNote(note)}
              className={`flex flex-col gap-2 items-center p-3 bg-slate-800 border border-gray-700 ${(selectedNote === note ? "bg-gray-800 border border-gray-700" : "bg-slate-800 border border-gray-700")}`}
            >
              <strong className="text-xl">{note}</strong>
            </button>
          ))}
        </div>

        <div className="flex gap-20">
          {selectedKey !== undefined &&
            <div className="flex flex-wrap gap-5">
              {Object.entries(selectedKey.chords).map(([chordType, chord]) => (
                <div className="flex flex-col" key={chordType}>
                  <span className="capitalize">{chordType} - {chord.symbol}</span>
                  <KeyboardVisual highlightedNotes={chord.notes} width={140} />
                </div>
              ))}
            </div>
          }
        </div>



      </div>
    </Layout>
  );
}


export default ChordsPage;