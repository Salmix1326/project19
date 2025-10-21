import React from 'react'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '@/features/auth/api/authSlice'
import { useGetAllUsersQuery } from '../../entities/user/api/userApi'
import { UserListItemWithActions } from '../UserListItemWithActions'

export function UserList() {
  const { data, isLoading, error } = useGetAllUsersQuery()
  const currentUser = useSelector(selectAuthUser)
  const currentRole = currentUser?.role

  if (isLoading) return <div>Завантаження...</div>
  if (error) return <div>Помилка: {error.toString()}</div>

  const users = data || []

  return (
    <div>
      {users.map((user) => (
        <UserListItemWithActions
          key={user.id}
          user={user}
          currentUser={currentUser}
          currentRole={currentRole}
        />
      ))}
    </div>
  )
}
