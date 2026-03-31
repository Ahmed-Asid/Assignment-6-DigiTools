

import './App.css'
import Navbar from './Component/Header/Navbar'
import Banner from './Component/Header/Banner'
import Stats from './Component/Header/Stats'
import Main from './Component/Main/Main'



function App() {


  return (
    <>
      <div className=' w-[75%] mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Stats></Stats>
      <div className=' w-[75%] mx-auto mt-30'>
        <Main></Main>
      </div>
    </>
  )
}

export default App
