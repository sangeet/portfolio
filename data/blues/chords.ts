import { all } from "axios";

type NoteType = "C" | "Db" | "D" | "Eb" | "E" | "F" | "Gb" | "G" | "Ab" | "A" | "Bb" | "B";
type ChordType = "major" | "minor" | "dominant" | "diminished" | "augmented" | "sus4" | "sus2" | "sixth" | "maj7" | "ninth" | "eleventh" | "thirteenth" | "add9" | "add11" | "add13";
type Scale = NoteType[];

type ChordProgression = ChordNumberReference[][];

type ChordNumberReference = {
    number: number;
    type: ChordType;
}

const twelveBarBluesProgression: ChordProgression = [
    [{ number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
];

const twelveBarFiveTurnaround: ChordProgression = [
    [{ number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 5, type: "major" }],
];

const twelveBarQuickChange: ChordProgression = [
    [{ number: 1, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
];

const twelveBarQuickChangeFiveTurnaround: ChordProgression = [
    [{ number: 1, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 5, type: "major" }],
];

const twelveBarBluesProgressions: { name: string, progression: ChordProgression }[] = [
    {
        name: "Standard",
        progression: twelveBarBluesProgression,
    },
    {
        name: "Standard V Turnaround",
        progression: twelveBarFiveTurnaround,
    },
    {
        name: "Quick Change",
        progression: twelveBarQuickChange,
    },
    {
        name: "Quick Change V Turnaround",
        progression: twelveBarQuickChangeFiveTurnaround,
    }
]


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
const locrian = [1, 2, 2, 1, 2, 2, 2];
const wholeToneScale = [2, 2, 2, 2, 2, 2];

const allScales = {
    major: majorScaleLogic,
    minor: minorScaleLogic,
    blues: bluesScale,
    majorPentatonic: majorPentatonic,
    minorPentatonic: minorPentatonic,
    mixolydian: mixolydian,
    locrian: locrian,
    wholeTone: wholeToneScale
}

const majorChordLogic = [1, 3, 5];
const minorChordLogic = [1, 3, 5];

type ScaleLogic = number[]

type ChordLogic = {
    logic: number[];
    scaleLogic: ScaleLogic;
}

type Chord = {
    root: NoteType;
    type: ChordType;
    notes: NoteType[];
}

const allChordLogic: Record<ChordType, ChordLogic> = {
    major: { logic: [1, 3, 5], scaleLogic: allScales.major },
    minor: { logic: [1, 3, 5], scaleLogic: allScales.minor },
    dominant: { logic: [1, 3, 5, 7], scaleLogic: allScales.mixolydian },
    diminished: { logic: [1, 3, 5], scaleLogic: allScales.locrian },
    augmented: { logic: [1, 3, 5], scaleLogic: allScales.wholeTone },
    sus4: { logic: [1, 4, 5], scaleLogic: allScales.major },
    sus2: { logic: [1, 2, 5], scaleLogic: allScales.major },
    sixth: { logic: [1, 3, 5, 6], scaleLogic: allScales.major },
    maj7: { logic: [1, 3, 5, 7], scaleLogic: allScales.major },
    ninth: { logic: [1, 3, 5, 7, 9], scaleLogic: allScales.major },
    eleventh: { logic: [1, 3, 5, 7, 9, 11], scaleLogic: allScales.major },
    thirteenth: { logic: [1, 3, 5, 7, 9, 11, 13], scaleLogic: allScales.major },
    add9: { logic: [1, 3, 5, 9], scaleLogic: allScales.major },
    add11: { logic: [1, 3, 5, 11], scaleLogic: allScales.major },
    add13: { logic: [1, 3, 5, 13], scaleLogic: allScales.major },
}

function generateScale(rootNote: NoteType, scaleLogic: ScaleLogic): NoteType[] {
    const rootIndex = allNotes.indexOf(rootNote);
    const scale: NoteType[] = [];
    let currentIndex = rootIndex;

    scale.push(allNotes[currentIndex]);

    // Only add steps.length notes, not steps.length + 1
    for (let i = 0; i < scaleLogic.length; i++) {
        currentIndex = (currentIndex + scaleLogic[i]) % allNotes.length;
        scale.push(allNotes[currentIndex]);
    }

    // Remove the last note (octave) so scale has only unique notes
    scale.pop();

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

function generateChord(rootNote: NoteType, chordLogic: ChordLogic): NoteType[] {
    const chord: NoteType[] = [];

    const scale = generateScale(rootNote, chordLogic.scaleLogic);
    for (const step of chordLogic.logic) {
        chord.push(scale[(step - 1) % scale.length]);
    }

    return chord;
}

function generateChords(rootNote: NoteType): Record<ChordType, Chord> {
    const chords: Record<ChordType, Chord> = {} as Record<ChordType, Chord>;

    for (const [type, logic] of Object.entries(allChordLogic)) {
        const chordNotes = generateChord(rootNote, logic);
        chords[type as ChordType] = {
            root: rootNote,
            type: type as ChordType,
            notes: chordNotes
        };
    }

    return chords;
}

export { generateScales, generateChords, generateProgression, generateScale };
export { bluesScale, minorPentatonic, majorPentatonic, mixolydian, allNotes, majorScaleLogic, minorScaleLogic, majorChordLogic, minorChordLogic, twelveBarBluesProgressions };
export { type ChordProgression, type ChordNumberReference, type Scale, type ChordType, type Chord, type NoteType };