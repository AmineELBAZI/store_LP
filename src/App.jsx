import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import './App.css'
import Navbars from './components/navbars.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Services from './pages/services.jsx'
import A_propos from './pages/a_propos.jsx'
import NoPage from './pages/noPage.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
  <>
    
    <BrowserRouter >
    <Navbars />
      {/* Navbar shown on all pages */}
    

      <div >
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Services />} />
          <Route path="a_propos" element={<A_propos />}  />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>

      {/* Footer shown on all pages */}
      <Footer />
    </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

export default App
