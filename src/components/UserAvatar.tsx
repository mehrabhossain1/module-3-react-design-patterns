import React from 'react'

const UserAvatar = ({ imageURL }) => {
  return (
    <div>
      <img className='size-20 border rounded-full' src={imageURL} alt='' />
    </div>
  )
}

export default UserAvatar
