import './App.css'
import logo from './assets/logo.svg'
import menuToggle from './assets/menu-toggle.svg'
import insta from './assets/insta.svg'
import pix from './assets/pix.svg'
import apoiaSe from './assets/apoiase.svg'
import email from './assets/mail.svg'
import heart from './assets/heart-vector.svg'
import catIcon from './assets/cat-icon-hero-section.svg'
import catImg from './assets/cat-hero-section.png'


function App() {
  return (
    <div id='container' className='font-nunito'>
      <header id='header' className='flex justify-between items-center h-[64px] bg-[#368C5E] py-[14px] px-[24px]'>
        <button id='donation-button' className='flex bg-[#FF9D3B] font-black text-[#FFFCCC] w-[121px] h-[28px] rounded-[19px] items-center justify-center'>quero doar</button>
        
        <div className='flex'>
          <img src={logo} alt="Gatil Irmã Francisca" className='mr-[20px] w-[121.82442474365234px]' />
          <a href="#"> <img src={menuToggle} alt="Menu principal" className='w-[32.10327911376953px]' /> </a>
        </div>
      </header>

      <div id="hero-section" className="relative flex flex-nowrap justify-between items-end overflow-hidden max-h-[271px] bg-[#FF9D3B] pl-[24px] pt-[16px]">
        <div id="hero-content" className="z-10 ">
          <h1 id="hero-title" className="font-quicksand font-bold text-[#FFFFFF] text-[34px] md:text-[42px] leading-none mb-[20px] break-normal whitespace-normal hyphens-none">
            Dê am
            <img src={heart} alt="Coração" className="inline-block max-w-[24.38054841148871px] h-8"/>
            r,
            <br />
            adote
            <br />
            um{" "}
            <span className="relative inline-block w-[83px] h-[34px] bg-[#368C5E] rounded-[4px] align-middle">
              <img
                src={catIcon}
                alt="Gato"
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  -top-3
                "
              />
            </span>
            <br />
            gatinho.
          </h1>

          <button className='mb-[30px] flex items-center justify-center bg-[#368C5E] text-[21px] text-[#FFFCCC] font-black w-[158px] h-[36.589473724365234px] rounded-[24.95px]'>quero doar</button>
        </div>
        <div id='hero-img' className='w-[205px] h-[271px] bg-no-repeat' style={{backgroundImage: `url(${catImg})`, backgroundSize: 'contain', backgroundPosition: 'right bottom'}}>
        
        <img
          src={heart}
          alt="Coração"
          className="absolute w-[23.337528695133464px] right-[20px] bottom-[85px] rotate-[20deg] z-10"
        />
          
        </div>
      </div>

      <footer id='footer' className='flex items-center justify-center bg-[#1A5331] h-[386px]'>
        <div className='w-[223.4762725830078px]'>
          <img src={logo} alt="Gatil Irmã Francisca" />

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

          <hr className="my-[15px] border-0 border-t border-white/20" />

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
