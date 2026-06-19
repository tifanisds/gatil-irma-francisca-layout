import './App.css'
import logo from './assets/logo.svg'
import menuToggle from './assets/menu-toggle.svg'


function App() {
  return (
    <div id='container' className='bg-[#FFFCCC] w-full h-screen font-nunito font-black'>
      <header id='header' className='flex justify-between items-center w-full h-[64px] bg-[#368C5E] py-[14px] px-[24px]'>
        <button id='donation-button' className='flex bg-[#FF9D3B] text-[#FFFCCC] w-[121px] h-[28px] rounded-[19px] items-center justify-center'>quero doar</button>
        
        <div className='flex'>
          <img src={logo} alt="Gatil Irmã Francisca" className='mr-[20px] w-[121.82442474365234px]' />
          <a href="#"> <img src={menuToggle} alt="Menu principal" className='w-[32.10327911376953px]' /> </a>
        </div>
      </header>
    </div>
  )
}

export default App
