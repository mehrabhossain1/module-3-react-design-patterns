import { useEffect, useRef } from 'react'
import CustomInputs from '../components/CustomInputs'

const UseRef = () => {
  const myRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    myRef.current?.focus()
  }, [])

  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault()

  //     console.log(myRef.current.value)
  //   }

  //   const [count, setCount] = useState(0)

  //   const increment = () => {
  //     myRef.current = myRef.current + 1
  //     setCount((prev) => prev + 1)

  //     console.log('State =>', count)
  //     console.log('Ref =>', myRef.current)
  //   }

  return (
    <div>
      <h1>useRef</h1>
      {/* <button onClick={() => increment()}>{count}</button> */}

      {/* comment */}
      <form>
        <CustomInputs ref={myRef} className='border border-red-500' />
        <CustomInputs className='border border-blue-500' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UseRef
