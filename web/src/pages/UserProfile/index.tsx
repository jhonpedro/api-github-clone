import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import axios from '../../services/axios'
import {
  UserProfileContainer,
  UserProfileData,
  UserProfileHeader,
  UserProfileCounts,
  UserProfileBiography,
} from './styles'

interface User {
  id: number
  name: string
  email: string
  localization: string
  avatar: string
  username: string
  bio: string
  createdAt: Date
  updatedAt: Date
  followersCount: number
  followingCount: number
  repositoriesCount: number
}

interface UseParamsProps {
  username: string | undefined
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>({} as User)
  const { username } = useParams<UseParamsProps>()

  useEffect(() => {
    if (username) {
      axios
        .get<any, AxiosResponse<User>>(`users/${username}`)
        .then((response) => {
          setUser(response.data)
        })
    } else {
      axios
        .get<any, AxiosResponse<User>>(
          `users/${localStorage.getItem('username')}`
        )
        .then((response) => {
          setUser(response.data)
        })
    }
  }, [])

  return (
    <UserProfileContainer>
      <UserProfileHeader>
        <span className="username">#{user.username}</span>
      </UserProfileHeader>

      <UserProfileData>
        {user.avatar ? (
          <img src={user.avatar} alt={`Foto de ${user.name}`} />
        ) : (
          <FaUserCircle size="13rem" color="var(--color-grey)" />
        )}

        <strong className="circle-left">
          {user.name ? user.name.toUpperCase() : ''}
        </strong>
        <span className="email">{user.email}</span>
        <span className="localization">{user.localization}</span>
      </UserProfileData>

      <UserProfileCounts>
        <div>
          <strong>{user.followersCount}</strong>
          <span>Seguidores</span>
        </div>
        <div>
          <strong>{user.followingCount}</strong>
          <span>Seguindo</span>
        </div>
        <div>
          <strong>{user.repositoriesCount}</strong>
          <span>Repos</span>
        </div>
      </UserProfileCounts>

      <UserProfileBiography>
        <strong className="circle-left">BIO</strong>
        <p>{user.bio}</p>
      </UserProfileBiography>
    </UserProfileContainer>
  )
}

export default UserProfile
