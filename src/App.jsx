/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

//rafce laisse ce commentaire stp
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Vue3d from './pages/Vue3d.jsx'
import Test from './pages/test.jsx'
import Story from './pages/Story.jsx'
import Get from './pages/Get.jsx'
import Details from './pages/Details.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vue3d" element={<Vue3d />} />
      <Route path="/test" element={<Test />} />
      <Route path="/story" element={<Story />} />
      <Route path="/get" element={<Get />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}

export default App
