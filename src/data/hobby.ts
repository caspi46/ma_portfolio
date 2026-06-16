export type SongRecommendation = {
    title: string
    artist: string
    note?: string
    addedAt: string
}

export const SONG_PREVIEW_COUNT = 5

export const SONG_RECOMMENDATIONS: SongRecommendation[] = [
    {
        title: 'Apocalypse',
        artist: 'Cigarettes After Sex',
        note: 'Slow, hazy atmosphere — good for winding down.',
        addedAt: '2026-06-10',
    },
    {
        title: 'Shelter',
        artist: 'Porter Robinson & Madeon',
        note: 'Bright and uplifting electronic pop.',
        addedAt: '2026-05-22',
    },
    {
        title: 'Midnight City',
        artist: 'M83',
        note: 'Synth-heavy and nostalgic.',
        addedAt: '2026-04-15',
    },
    {
        title: 'Motion',
        artist: 'Tycho',
        note: 'Good for late-night coding sessions.',
        addedAt: '2026-03-08',
    },
    {
        title: 'Night Owl',
        artist: 'Galimatias',
        note: 'Smooth and mellow — easy to loop while reading.',
        addedAt: '2026-02-19',
    },
    {
        title: 'Resonance',
        artist: 'Home',
        note: 'Nostalgic synthwave energy.',
        addedAt: '2026-01-30',
    },
    {
        title: 'Pink + White',
        artist: 'Frank Ocean',
        note: 'Warm and laid-back — a long-time favorite.',
        addedAt: '2025-12-12',
    },
]

export function getSongsNewestFirst(): SongRecommendation[] {
    return [...SONG_RECOMMENDATIONS].sort(
        (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(),
    )
}
