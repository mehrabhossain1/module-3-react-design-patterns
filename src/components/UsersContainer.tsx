import useUsersData from '../hooks/useUsersData'
import UsersList from './UsersList'

const UsersContainer = () => {
  const { data, error, isLoading } = useUsersData()

  const props = {
    data,
    isLoading,
    error,
  }

  return <UsersList {...props} />
}

export default UsersContainer
