import type { SongRecommendation } from '../../data/hobby'

type SongTableProps = {
    songs: SongRecommendation[]
    fullWidth?: boolean
}

function SongTable({ songs, fullWidth = false }: SongTableProps) {
    return (
        <div className={fullWidth ? 'song-table-wrap song-table-wrap--full' : 'song-table-wrap'}>
            <table className="song-table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Note</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <tr key={`${song.artist}-${song.title}`}>
                            <td className="song-table-title">{song.title}</td>
                            <td className="song-table-artist">{song.artist}</td>
                            <td className="song-table-note">{song.note ?? '—'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SongTable
