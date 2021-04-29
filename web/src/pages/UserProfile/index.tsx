import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../services/axios'

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
    <div>
      <span>Name: {user.name}</span>
      <span>Email: {user.email}</span>
      <span>Localização {user.localization}</span>
      <span>
        Avatar <img src={user.avatar} alt={`Foto de ${user.name}`} />
      </span>
      <span>Username: {user.username}</span>
      <span>Biografia: {user.bio}</span>
      <span>Followers: {user.followersCount}</span>
      <span>Following: {user.followingCount}</span>
      <span>Quantidade de repositórios: {user.repositoriesCount}</span>
    </div>
  )
}

export default UserProfile
