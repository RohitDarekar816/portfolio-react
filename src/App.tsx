import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full max-w-2xl mx-auto mt-4">
        <a href="https://vite.dev" target="_blank" className="w-24 sm:w-32">
          <img src={viteLogo} className="logo w-full h-auto" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="w-24 sm:w-32">
          <img src={reactLogo} className="logo react w-full h-auto" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl sm:text-4xl mt-4">Vite + React</h1>
      <div className="card mt-4 p-4 sm:p-8">
        <button onClick={() => setCount((count) => count + 1)} className="px-4 py-2 text-base sm:text-lg">
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-2">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
