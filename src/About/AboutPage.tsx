
import BackGroundImage from '../About/BackGroundImage';

import MessageBanners from '../About/MessageBanners';
import Service from '../About/Service';
import InfoAbout from '../About/InfoAbout';
import Galerie from '../About/Galerie';
import Packs from '../About/Packs';
import Footer from '../About/Footer';

import AOS from "aos";


function AboutPage(){
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 200
    });

    return(
      <>
      <>
        {/* About Page */}
        <>
          <BackGroundImage/>
          <MessageBanners/>
        </>  
        <Service/>
        <InfoAbout/>
        <Galerie/> 
        <Packs/>
        <Footer/>
        </>
      </>
    );
}
export default AboutPage;