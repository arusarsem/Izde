import Navbar from './components/Navbar/Navbar'
import {Home, About, Program,Contact, Footer, Mentor} from './components/index'
function App() {


  return <div className="font-Poppins bg-Solitude">
    {/* <Navbar /> */}
    <Home />
    <About />
    <Program/>
    <Contact />
    <Footer />
    <Mentor />
    
  </div>
  
}

export default App
