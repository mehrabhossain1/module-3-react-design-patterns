const withBorder = (WrappedComponent) => {
  return (props) => (
    <div className='border-2 border-purple-500 rounded-full'>
      <WrappedComponent />
    </div>
  )
}

export default withBorder
