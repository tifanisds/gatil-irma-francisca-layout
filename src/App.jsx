import './App.css'
import logo from './assets/logo.svg'
import menuToggle from './assets/menu-toggle.svg'
import insta from './assets/insta.svg'
import pix from './assets/pix.svg'
import apoiaSe from './assets/apoiase.svg'
import email from './assets/mail.svg'


function App() {
  return (
    <div id='container' className='bg-[#FFFCCC] w-full h-screen font-nunito'>
      <header id='header' className='flex justify-between items-center w-full h-[64px] bg-[#368C5E] py-[14px] px-[24px]'>
        <button id='donation-button' className='flex bg-[#FF9D3B] font-black text-[#FFFCCC] w-[121px] h-[28px] rounded-[19px] items-center justify-center'>quero doar</button>
        
        <div className='flex'>
          <img src={logo} alt="Gatil Irmã Francisca" className='mr-[20px] w-[121.82442474365234px]' />
          <a href="#"> <img src={menuToggle} alt="Menu principal" className='w-[32.10327911376953px]' /> </a>
        </div>
      </header>

      <footer id='footer' className='flex items-center justify-center bg-[#1A5331] h-[386px]'>
        <div className='w-[223.4762725830078px]'>
          <img src={logo} alt="Gatil Irmã Francisca" className='w-full' />

          <div id='social media' className='flex space-x-4 my-[30px]'>
            <div id='instagram' className='flex justify-center items-center bg-[#FF9D3B] w-[43.60165786743164px] h-[43.60165786743164px] rounded-[100%]'><img src={insta} alt="Instagram" className='w-[24.548633575439453px]' /></div>
            <div id='pix' className='flex justify-center items-center bg-[#FF9D3B] w-[43.60165786743164px] h-[43.60165786743164px] rounded-[100%]'><img src={pix} alt="Pix" className='w-[24.548633575439453px]' /></div>
            <div id='apoia-se' className='flex justify-center items-center bg-[#FF9D3B] w-[43.60165786743164px] h-[43.60165786743164px] rounded-[100%]'><img src={apoiaSe} alt="Apoia-se" className='w-[24.548633575439453px]' /></div>
            <div id='email' className='flex justify-center items-center bg-[#FF9D3B] w-[43.60165786743164px] h-[43.60165786743164px] rounded-[100%]'><img src={email} alt="E-mail" className='w-[24.548633575439453px]' /></div>
          </div>

          <p id="company-info" className='text-center text-[#FFFCCC] font-normal'>
            Gatil Irmã Francisca <br /> 
            CNPJ 00.000.000/0000-00 <br /> 
            gatilirmafrancisca@gmail.com
          </p>

          <hr className="my-[15px] w-full border-0 border-t border-white/20" />

          <p id="legal-info" className='text-center text-[#FFFCCC] font-normal'>
            Todos os direitos reservados © <br />
            Em conformidade com LGPD <br />
            Desenvolvido por: (voluntários)
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
