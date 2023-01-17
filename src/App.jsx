import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MainBody />
    </div>
  )
}

export default App
