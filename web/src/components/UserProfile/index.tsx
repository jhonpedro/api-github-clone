import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { UserI } from '../../hooks/requestUserData'

import {
  UserProfileContainer,
  UserProfileData,
  UserProfileHeader,
  UserProfileCounts,
  UserProfileBiography,
} from './styles'

const UserProfile: React.FC<UserI> = ({
  name,
  email,
  localization,
  avatar,
  username,
  bio,
  followersCount,
  followingCount,
  repositoriesCount,
}) => (
  <UserProfileContainer>
    <UserProfileHeader>
      <span className="username">#{username}</span>
    </UserProfileHeader>

    <UserProfileData>
      {avatar ? (
        <img src={avatar} alt={`Foto de ${name}`} />
      ) : (
        <FaUserCircle size="13rem" color="var(--color-grey)" />
      )}

      <strong className="circle-left">{name ? name.toUpperCase() : ''}</strong>
      <span className="email">{email}</span>
      <span className="localization">{localization}</span>
    </UserProfileData>

    <UserProfileCounts>
      <div>
        <strong>{followersCount}</strong>
        <span>Seguidores</span>
      </div>
      <div>
        <strong>{followingCount}</strong>
        <span>Seguindo</span>
      </div>
      <div>
        <strong>{repositoriesCount}</strong>
        <span>Repos</span>
      </div>
    </UserProfileCounts>

    <UserProfileBiography>
      <strong className="circle-left">BIO</strong>
      <p>{bio}</p>
    </UserProfileBiography>
  </UserProfileContainer>
)

export default UserProfile
