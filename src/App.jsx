
import './App.css'
import SubNav from './components/SubNav'
import Navbar from './components/Navbar'
import Sidebar from './components/Siderbar'
import OS from './components/Overview-stoage'
import RF from './components/Recent-file'

function App() {


  return (
    <main className=' bg-gray-950 text-white min-h-screen min-w-full'>
     <Sidebar/> 
     <Navbar/>
     <SubNav/>
     <OS/>
     <RF/>
    </main>
  )
}

export default App
