type KeyObject = {
    keyNameInFlat: string;
    keyNameInSharp: string;
    chordsList: Chord[];
};

type Chord = {
    name: string;
    chordNameInFlat: string;
    chordNameInSharp: string;
    quality: string;
    majorVariant: string;
    minorVariant: string;
};

type NoteType = "C" | "Db" | "D" | "Eb" | "E" | "F" | "Gb" | "G" | "Ab" | "A" | "Bb" | "B";
type ChordType = "Major" | "Minor" | "Dominant" | "Diminished" | "Augmented";
type Scale = NoteType[];

type ChordProgression = ChordNumberReference[][];

type ChordNumberReference = {
    number: number;
    type: ChordType;
}

const twelveBarBluesProgression: ChordProgression = [
    [{ number: 1, type: "Major" }, { number: 1, type: "Major" }, { number: 1, type: "Major" }, { number: 1, type: "Major" }],
    [{ number: 4, type: "Major" }, { number: 4, type: "Major" }, { number: 1, type: "Major" }, { number: 1, type: "Major" }],
    [{ number: 5, type: "Major" }, { number: 4, type: "Major" }, { number: 1, type: "Major" }, { number: 1, type: "Major" }],
];

function generateProgression(chordProgression: ChordProgression, rootNote: NoteType): Scale[] {
    const scales: Scale[] = [];
    const scale = generateScale(rootNote, majorScaleLogic);

    for (const progression of chordProgression) {
        const progressionScale: Scale = [];
        for (const chord of progression) {
            const chordIndex = (chord.number - 1) % scale.length;
            progressionScale.push(scale[chordIndex]);
        }
        scales.push(progressionScale);
    }

    return scales;
}

const allNotes: NoteType[] = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const majorScaleLogic = [2, 2, 1, 2, 2, 2, 1];
const minorScaleLogic = [2, 1, 2, 2, 1, 2, 2];

const bluesScale = [2, 1, 1, 3, 2];
const majorPentatonic = [2, 2, 3, 2, 3];
const minorPentatonic = [3, 2, 2, 3];
const mixolydian = [2, 2, 1, 2, 2, 1, 2];

const majorChordLogic = [1, 3, 5];
const minorChordLogic = [1, 3, 5];

function generateScale(rootNote: NoteType, scaleLogic: number[]): NoteType[] {
    const rootIndex = allNotes.indexOf(rootNote);
    const scale: NoteType[] = [];
    let currentIndex = rootIndex;

    scale.push(allNotes[currentIndex]);

    for (const step of scaleLogic) {
        currentIndex = (currentIndex + step) % allNotes.length;
        scale.push(allNotes[currentIndex]);
    }

    return scale;
}

function generateScales(rootNote: NoteType): {
    majorScale: Scale;
    minorScale: Scale;
} {
    const majorScale = generateScale(rootNote, majorScaleLogic);
    const minorScale = generateScale(rootNote, minorScaleLogic);
    return {
        majorScale,
        minorScale
    };
}

function generateChord(chordLogic: number[], rootNote: NoteType, scale: Scale): NoteType[] {
    const chord: NoteType[] = [];

    for (const step of chordLogic) {
        chord.push(scale[(step - 1) % scale.length]);
    }

    return chord;
}

function generateChords(rootNote: NoteType): {
    majorChord: NoteType[];
    minorChord: NoteType[];
} {
    const majorChord = generateChord(majorChordLogic, rootNote, generateScale(rootNote, majorScaleLogic));
    const minorChord = generateChord(minorChordLogic, rootNote, generateScale(rootNote, minorScaleLogic));
    return {
        majorChord,
        minorChord
    };

}

export { generateScales, generateChords, generateProgression, generateScale };
export { bluesScale, minorPentatonic, majorPentatonic, mixolydian, allNotes, twelveBarBluesProgression, majorScaleLogic, minorScaleLogic, majorChordLogic, minorChordLogic };
export { type ChordProgression, type ChordNumberReference, type Scale, type ChordType, type KeyObject, type Chord, type NoteType };