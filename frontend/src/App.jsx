
import { Routes, Route } from "react-router"
import { Header } from "./components/Header"
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { ContentGrid } from "./components/ContentGrid"

function App() {
  return (
    <Routes>
      <Route index element={<ContentGrid />} />
      <Route path="businessform" element={<div>test</div>} />
      {/* <Nav />
      <Header />
      <Sidebar /> */}
    </Routes> 
  )
}

export default App
