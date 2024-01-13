import './App.css'
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
      <UsersContainer />
    </div>
  )
}

export default App
