import Login from './pages/Login'
import Layout from './pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
