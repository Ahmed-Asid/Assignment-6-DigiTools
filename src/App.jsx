import './App.css'
import Navbar from './Component/Header/Navbar'
import Banner from './Component/Header/Banner'
import Stats from './Component/Header/Stats'
import Main from './Component/Main/Main'
import Steps from './Component/Steps & Pricing/Steps'



function App() {


  return (
    <>
      <div className='w-[90%] md:w-[85%] lg:w-[75%] mx-auto'>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Stats></Stats>
      <div className='w-[90%] md:w-[85%] lg:w-[75%] mx-auto mt-30'>
        <Main></Main>
      </div>
      <Steps></Steps>
    </>
  )
}

export default App
