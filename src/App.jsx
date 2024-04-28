import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMain from './components/home/HomeMain'
import ProductHome from "./components/home/product/ProductHome";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeMain/>} />
          <Route path="/top-products" element={<ProductHome/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
