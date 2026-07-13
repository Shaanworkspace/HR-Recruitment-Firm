import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import InfoPage from './pages/InfoPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<InfoPage slug="jobs" />} />
          <Route path="/employers" element={<InfoPage slug="employers" />} />
          <Route path="/candidates" element={<InfoPage slug="candidates" />} />
          <Route path="/resources" element={<InfoPage slug="resources" />} />
          <Route path="/about" element={<InfoPage slug="about" />} />
          <Route path="/contact" element={<InfoPage slug="contact" />} />
          <Route path="/privacy" element={<InfoPage slug="privacy" />} />
          <Route path="/terms" element={<InfoPage slug="terms" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
