import './App.css'
import Select from './components/Select'
import UsersContainer from './components/UsersContainer'
import TodoList from './components/todo/TodoList'
import GameResult from './pages/GameResult'
import Profile from './pages/Profile'

function App() {
  // const { dark, setDark } = useContext(ThemeContext) as TThemeContext
  // console.log(dark)

  return (
    <div
    // className={`h-screen w-full flex justify-center items-center ${
    //   dark ? 'bg-black' : 'bg-white'
    // }`}
    >
      {/* <button onClick={() => setDark(!dark)}>Toggle</button> */}
      {/* <UseRef /> */}

      {/* <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}
      {/* <Profile /> */}
      {/* <GameResult /> */}
      {/* <TodoList /> */}
      {/* <UsersContainer /> */}

      <Select>
        <Select.SelectOption value='option1'>Option 1</Select.SelectOption>
        <Select.SelectOption value='option2'>Option 2</Select.SelectOption>
        <Select.SelectOption value='option3'>Option 3</Select.SelectOption>
        <Select.SelectOption value='option4'>Option 4</Select.SelectOption>
      </Select>
    </div>
  )
}

export default App
