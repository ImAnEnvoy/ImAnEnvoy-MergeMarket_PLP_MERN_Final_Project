
import { Routes, Route } from "react-router"
import { HomePage } from "./components/HomePage"
import BusinessForm from "./components/BusinessForm"


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="businessForm" element={<BusinessForm />}/>
    </Routes> 
  )
}

export default App;
