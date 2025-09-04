import './App.css'
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Navbar from './components/navbar/Nav'
import SiteLayout from './components/layout/Layout'
import Home from './pages/home/Home'
import Traveling from './pages/traveling/Traveling'
import Tour from './pages/tour/Tour'
import { ScrollToTop } from './components/ScrollComp/ScrolToTop'

function App() {
 

  return (
    <>
   <Router>
     <ScrollToTop />
  <SiteLayout>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/traveling' element={<Traveling/>}/>
      <Route path='/tours' element={<Tour/>}/>

    </Routes>

  </SiteLayout>

   </Router>
    </>
  )
}

export default App
