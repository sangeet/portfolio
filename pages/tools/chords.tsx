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

export const KeyboardVisual = ({
  highlightedNotes,
  octaves = 1,
  width = 210 // default width in px for 1 octave (7 white keys * 30px)
}: {
  highlightedNotes: NoteType[],
  octaves?: number,
  width?: number
}) => {
  const whiteKeyCount = 7 * octaves;
  const whiteKeyWidth = width / whiteKeyCount;
  const whiteKeyHeight = whiteKeyWidth * 3.3;
  const blackKeyWidth = whiteKeyWidth * 0.6;
  const blackKeyHeight = whiteKeyHeight * 0.6;

  // White and black key order for each octave
  const whiteNotes = ["C", "D", "E", "F", "G", "A", "B"];
  const blackNotes = [
    { note: "Db", pos: 0.7 },
    { note: "Eb", pos: 1.7 },
    // skip E-F
    { note: "Gb", pos: 3.7 },
    { note: "Ab", pos: 4.7 },
    { note: "Bb", pos: 5.7 }
  ];

  return (
    <div
      className="relative"
      style={{
        width: width,
        height: whiteKeyHeight,
        minWidth: width,
        minHeight: whiteKeyHeight,
        maxWidth: width,
        maxHeight: whiteKeyHeight,
        userSelect: "none"
      }}
    >
      {/* White keys */}
      <div className="absolute left-0 top-0 flex" style={{ zIndex: 1 }}>
        {Array.from({ length: octaves }).flatMap((_, oct) =>
          whiteNotes.map((n, i) => {
            const note = n as NoteType;
            const idx = oct * 7 + i;
            return (
              <div
                key={`w-${oct}-${n}`}
                style={{
                  width: whiteKeyWidth,
                  height: whiteKeyHeight
                }}
                className={`border border-black ${highlightedNotes.includes(note) ? "bg-yellow-400" : "bg-white"}`}
              />
            );
          })
        )}
      </div>
      {/* Black keys */}
      <div className="absolute top-0" style={{ zIndex: 2, width: "100%", height: blackKeyHeight, left: width/25.0 }}>
        {Array.from({ length: octaves }).flatMap((_, oct) =>
          blackNotes.map(({ note, pos }, i) => {
            const left = ((oct * 7 + pos) * whiteKeyWidth) - blackKeyWidth / 2;
            return (
              <div
                key={`b-${oct}-${note}`}
                style={{
                  position: "absolute",
                  left,
                  width: blackKeyWidth,
                  height: blackKeyHeight
                }}
                className={`${highlightedNotes.includes(note as NoteType) ? "bg-yellow-500" : "bg-gray-800"} border border-black rounded-b`}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ChordsPage;