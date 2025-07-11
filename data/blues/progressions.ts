import { allScales, ChordProgreessionReference, Scale, ScaleLogic } from "./chords";

const twelveBarBluesProgression: ChordProgreessionReference = [
    [{ number: 1, type: "dominant" }, { number: 1, type: "dominant" }, { number: 1, type: "dominant" }, { number: 1, type: "dominant" }],
    [{ number: 4, type: "dominant" }, { number: 4, type: "dominant" }, { number: 1, type: "dominant" }, { number: 1, type: "dominant" }],
    [{ number: 5, type: "dominant" }, { number: 4, type: "dominant" }, { number: 1, type: "dominant" }, { number: 1, type: "dominant" }],
];

const twelveBarFiveTurnaround: ChordProgreessionReference = [
    [{ number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 5, type: "major" }],
];

const twelveBarQuickChange: ChordProgreessionReference = [
    [{ number: 1, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
];

const twelveBarQuickChangeFiveTurnaround: ChordProgreessionReference = [
    [{ number: 1, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 5, type: "major" }],
];

const majorMinorMixTest: ChordProgreessionReference = [
    [
        { number: 1, type: "major" },
        { number: 5, type: "major" },
        { number: 6, type: "minor" },
        { number: 4, type: "major" },
    ]
]

type ScaleRecommendation = {
    name: string;
    scale: ScaleLogic;
}

const recommendedBluesScales: ScaleRecommendation[] = [
    {
        name: "Blues",
        scale: allScales.minorBluesScale,
    },
    {
        name: "Mixolydian",
        scale: allScales.mixolydian,
    }
]

const generalScales: ScaleRecommendation[] = [
    {
        name: "Major",
        scale: allScales.major,
    },
    {
        name: "Pentatonic",
        scale: allScales.majorPentatonic,
    },
]

const twelveBarBluesProgressions: { 
    name: string, 
    progression: ChordProgreessionReference,
    recommendedScales: ScaleRecommendation[],
}[] = [
    {
        name: "Standard",
        progression: twelveBarBluesProgression,
        recommendedScales: recommendedBluesScales,
    },
    {
        name: "Standard V Turnaround",
        progression: twelveBarFiveTurnaround,
        recommendedScales: recommendedBluesScales,
    },
    {
        name: "Quick Change",
        progression: twelveBarQuickChange,
        recommendedScales: recommendedBluesScales,
    },
    {
        name: "Quick Change V Turnaround",
        progression: twelveBarQuickChangeFiveTurnaround,
        recommendedScales: recommendedBluesScales,
    },
    {
        name: "Major Minor Mix Test",
        progression: majorMinorMixTest,
        recommendedScales: generalScales
    },
]

export { twelveBarBluesProgressions }