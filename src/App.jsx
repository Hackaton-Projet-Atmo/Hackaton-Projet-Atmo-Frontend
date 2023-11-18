import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maps from "./map.jsx";

function App() {
  return (
    <>
        <div className="grid grid-cols-2 gap-4 h-screen">
            <Maps/>
            <div>
                <h1>Ici graph</h1>
            </div>
        </div>
    </>
  )
}

export default App
