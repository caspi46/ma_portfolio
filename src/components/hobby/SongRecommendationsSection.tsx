import {
    SONG_PREVIEW_COUNT,
    getSongsNewestFirst,
} from '../../data/hobby'
import { ROUTES } from '../../router/pages'
import HashLink from '../HashLink'
import SongTable from './SongTable'

function SongRecommendationsSection() {
    const songs = getSongsNewestFirst()
    const hasMore = songs.length > SONG_PREVIEW_COUNT
    const previewSongs = songs.slice(0, SONG_PREVIEW_COUNT)

    return (
        <>
            <div className="section-header">
                <h2 className="section-title">Song Recommendations</h2>
                {hasMore ? (
                    <HashLink to={ROUTES.songs} className="section-more-btn">
                        more
                    </HashLink>
                ) : null}
            </div>

            <SongTable songs={previewSongs} />
        </>
    )
}

export default SongRecommendationsSection
