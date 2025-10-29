
import { Header } from "./components/Header"
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { ContentGrid } from "./components/ContentGrid"

function App() {
  return (
    <>
      <Header />
      <ContentGrid />
      <Nav />
      <Sidebar />
    </>
  )
}

export default App
