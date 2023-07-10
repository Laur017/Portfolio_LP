/* eslint-disable react/no-unescaped-entities */
import Poza from './img/tip_buletin.png'
import Curriculum from './Popa_Laurentiu_CV.pdf'

export default function Home() {

  const goToSocial = (aux) => {
    aux === 1 ?
      window.open( 'https://www.instagram.com/popa_laurentiu_/', '_blank', 'noopener,noreferrer' ):
      aux === 2 ?
      window.open('https://github.com/Laur017', '_blank', 'noopener,noreferrer' ):
      aux === 3 ?
      window.open('https://www.linkedin.com/in/laurentiu-popa-325a64156/', '_blank', 'noopener,noreferrer' ):
      location.href = './Popa_Laurentiu_CV.pdf'
  }

  return (
    <div className='home-div'>
       <img src={Poza} />
       <div className="home-right-part">
        <h1>Hi, I'm <span>Laurentiu</span></h1>
        <h2><span>React</span> Developer</h2>
        <div className='home-mail-part'>
          <div className="mail-logo"></div>
          <h3>popa.laur.01@gmail.com</h3>
        </div>
        <div className='home-social-part'>
          <div className='insta-logo' onClick={()=>goToSocial(1)}></div>
          <div className='github-logo' onClick={()=>goToSocial(2)}></div>
          <div className='linkedin-logo' onClick={()=>goToSocial(3)}></div>
          <a
            href={Curriculum}
            download="CV-Popa_Laurentiu"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
        </div>
    </div>
  )
}
