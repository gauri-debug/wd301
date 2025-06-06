import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard1 TaskCard2 from "./task-card.jsx"
function App() {
  return (
    <div>
      <div>
        <h1> Pending </h1>
        <TaskCard1 title = "Build the website with static content " date = "10th April" name = "Rohit S."/>
        <TaskCard1 title = "Add a blog " date = "22nd March" name " Rohit M."/>
        <button className="btn">Add Task</button>
      </div>
      <div>
        <h1> Done </h1>
        <TaskCard2 title = "Design the mockup" date = "10th April" name = "Rohit M." />
        <TaskCard2 title = "Get the approval from principal" date = "20th April" name = "Ajay S." />
      </div>
    </div>
  )
}
export default App

