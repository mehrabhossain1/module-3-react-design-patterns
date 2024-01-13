import UserAvatar from '../components/UserAvatar'
import withBorder from '../components/withBorder'

const UserWithBorder = withBorder(UserAvatar)

const GameResult = () => {
  return (
    <div className='flex gap-3'>
      <UserAvatar />
      <UserWithBorder />
      <UserAvatar />
      <UserAvatar />
    </div>
  )
}

export default GameResult
