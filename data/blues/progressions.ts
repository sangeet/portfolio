import { ChordProgreessionReference } from "./chords";

const twelveBarBluesProgression: ChordProgreessionReference = [
    [{ number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 4, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
    [{ number: 5, type: "major" }, { number: 4, type: "major" }, { number: 1, type: "major" }, { number: 1, type: "major" }],
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

const twelveBarBluesProgressions: { name: string, progression: ChordProgreessionReference }[] = [
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
    },
    {
        name: "Major Minor Mix Test",
        progression: majorMinorMixTest,
    },
]

export { twelveBarBluesProgressions }