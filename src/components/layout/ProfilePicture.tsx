import { PROFILE } from '../../data/profile'

function ProfilePicture() {
    return (
        <img
            className="profile-picture"
            src={PROFILE.imageSrc}
            alt={PROFILE.name}
        />
    )
}

export default ProfilePicture
