import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = (() => {
  return (
    <>
    <div className="bg-gray-900 text-white p-4">
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
      </div>
    </div>
    </>
  )
})

export default App