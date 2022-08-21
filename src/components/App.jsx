/* eslint-disable  */
import './App.scss'
import { useTheme } from '../hooks/useTheme'

function App() {
  const { theme, setTheme } = useTheme()

  const setDarkTheme = () => {
    setTheme('dark')
  }
  const setLightTheme = () => {
    setTheme('light')
  }

  return (
    <>
      <div className="main">
        <h1>Aim training</h1>
        <button onClick={setDarkTheme}>Dark</button>
        <button onClick={setLightTheme}>Light</button>
      </div>
      <div className="footer">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          qui! Cumque, maxime dolorum laudantium facilis repellendus,
          perferendis facere accusantium aut accusamus officia error. Placeat,
          perspiciatis similique voluptatibus aperiam laboriosam soluta!
        </span>
      </div>
    </>
  )
}

export default App
