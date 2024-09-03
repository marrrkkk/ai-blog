import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import History from "./pages/History"
import People from "./pages/People"
import Footer from "./components/Footer"

const App = () => {
  return(
    <main className="bg-black font-inter">
      <div className="bg-[#18181b] lg:mx-28 border-r border-l border-neutral-700">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/people" element={<People />} />
        </Routes>
        <Footer />
      </div>
    </main>
  )
}

export default App
