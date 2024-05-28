import  pikaso_texttoimage from"../image/aboutImg/pikaso_texttoimage_35mm-film-photography-Lifelike-animeinspired-illus.jpeg";
import secured_online_purcheses from "../image/aboutImg/pikaso_texttoimage_secured-online-purcheses.jpeg"

import "aos/dist/aos.css"

function InfoAbout(){

    return(
    <div className="container-xxl py-5" id="About">
      <div className="container py-2">
        <div className="row" data-aos="fade-right">
          <div className="col-sm-12 col-lg-6">
            <div className="w-100">
              <img className="img-fluid" src={pikaso_texttoimage} alt=""/>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6" >
            <div className="content mt-4">
              <h5 className="text-primary fw-bold fs-3">About-Us</h5>
              <h1 className="text-danger">Nous proposons les tout derniers produits.</h1>
              <p style={{ textAlign: "justify" }}>
                Cela signifie que notre entreprise offre aux clients les articles technologiques les plus récents sur le marché. Nous nous efforçons de rester à jour avec les dernières tendances et innovations dans le domaine de la technologie, afin de fournir à nos clients des produits de pointe et à la pointe de la technologie.                     
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-2">
        <div className="row" data-aos="fade-left">  
          <div className="col-sm-12 col-lg-6">
            <div className="content mt-4">
                <h5 className="text-primary fw-bold fs-3">About-Us</h5>
                <h1 className="text-danger">Commande en ligne sécurisée</h1>
                <p style={{ textAlign: "justify" }}>
                  Cela signifie que notre entreprise propose un processus de commande en ligne sécurisé pour nos clients. Nous mettons en place des mesures de sécurité strictes pour protéger les informations personnelles et financières de nos clients lorsqu'ils passent des commandes sur notre plateforme en ligne.                                             
                </p>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="w-100">
                <img className="img-fluid" src={secured_online_purcheses} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
);
}
export default InfoAbout;