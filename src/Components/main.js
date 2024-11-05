import "./main.css";
import Navbar from './navbar';
// import SYWbg from './SYWbg.jpeg';
// import SYWllcc from './SYWllcc.jpeg';
import PathCard from './card';
import AnimatedButton from './button';
import GlowingBackground from './bgCircles';



function Main() {
  return (
    <>
        <div className='main'>
        <Navbar/>
        <div className='middle'>
        <img className='bg-image' src="./SYWbg.jpeg"/>
        <h1>Become a <span className='spanText1'>"SECURITY CAPTAIN"</span></h1>
        <h1 className='text2'>at Safe<span className='spanText2'>Your</span>Web</h1>
        <p className='sub-title'>Join an elite group of cybersecurity solopreneurs and lead the charge in securing
        the digital world.</p>
        <img className='bg-logo'  src="./SYWllcc.jpeg"/>
        <AnimatedButton/>
        <GlowingBackground/>
        <PathCard/>
        </div>
      </div>
    </>
  )
}

export default Main;
