import UserAvatar from '../components/UserAvatar'
import withBorder from '../components/withBorder'

const UserWithBorder = withBorder(UserAvatar)

const GameResult = () => {
  return (
    <div className='flex gap-3'>
      <UserAvatar
        imageURL={
          'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
        }
      />
      <UserWithBorder
        imageURL={
          'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
        }
      />
      <UserAvatar
        imageURL={
          'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
        }
      />
      <UserAvatar
        imageURL={
          'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
        }
      />
    </div>
  )
}

export default GameResult
