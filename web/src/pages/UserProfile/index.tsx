import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
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
        <img src={user.avatar} alt={`Foto de ${user.name}`} />
        <strong>{user.name}</strong>
        <span className="email">{user.email}</span>
        <span className="localization">{user.localization}</span>
      </UserProfileData>

      <UserProfileCounts>
        <div>
          <strong>{user.followersCount}</strong>
          <span>Followers</span>
        </div>
        <div>
          <strong>{user.followingCount}</strong>
          <span>Following</span>
        </div>
        <div>
          <strong>{user.repositoriesCount}</strong>
          <span>Repos</span>
        </div>
      </UserProfileCounts>

      <UserProfileBiography>
        <strong>Bio</strong>
        <p>{user.bio}</p>
      </UserProfileBiography>
    </UserProfileContainer>
  )
}

export default UserProfile
