import { useContext } from 'react'
import './App.css'
import { TThemeContext, ThemeContext } from './context/ThemeProvider'
import { MenuItem, MenuList } from './components/Menu'

function App() {
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext
  console.log(dark)

  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        dark ? 'bg-black' : 'bg-white'
      }`}
    >
      <button onClick={() => setDark(!dark)}>Toggle</button>
      {/* <UseRef /> */}

      <MenuList>
        <MenuItem></MenuItem>
      </MenuList>
    </div>
  )
}

export default App
