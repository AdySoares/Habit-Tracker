import './styles/global.css'

import { Habit } from "./components/habits"

function App() {

  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={30}/>
      <Habit completed={2}/>
      <Habit completed={1}/>
      <Habit completed={5}/>
      <Habit completed={4}/>
      <Habit completed={23}/>
      <Habit completed={16}/>
      <Habit completed={0}/>
    </div>
  )
}

export default App
