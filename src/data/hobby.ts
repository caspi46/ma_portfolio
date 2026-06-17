export type SongRecommendation = {
    title: string
    artist: string
    note?: string
    addedAt: string
}

export const SONG_PREVIEW_COUNT = 5

export const SONG_RECOMMENDATIONS: SongRecommendation[] = [
    {
        title: 'Karasu - Raven',
        artist: 'Yonezu Kenshi',
        note: 'Strings, Good mood, and Interesting instruments used.',
        addedAt: '2026-06-16',
    },
    {
        title: 'Plover',
        artist: 'Yorushika',
        note: 'brass, interesting lyrics.',
        addedAt: '2026-06-16',
    },
    {
        title: 'Panda Bear',
        artist: 'Hyukoh',
        note: 'K-indie.',
        addedAt: '2026-06-16',
    },
    {
        title: 'Kaiju',
        artist: 'Sakanaction',
        note: 'CHI.',
        addedAt: '2026-06-16',
    },
    {
        title: 'Ghost Mansion',
        artist: 'Hachi',
        note: 'Holloween.',
        addedAt: '2026-06-16',
    },
]

export function getSongsNewestFirst(): SongRecommendation[] {
    return [...SONG_RECOMMENDATIONS].sort(
        (a, b) => new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(),
    )
}
