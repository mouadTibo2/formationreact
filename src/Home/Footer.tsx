import whatsappImage from "../image/whatsapp.svg"
import paymentImage from "../image/payment.png"
import facebookImage from "../image/facebook.svg"
import instagramImage from  "../image/instagram.svg"
import envelopeImage from "../image/envelope-at-fill.svg"

function Footer(){
    return(
      <div className="container-fluid bg-dark text-light">
        <div className="row">
          <div className="col-12 text-center mb-3">
          <h1>TechnoMaroc</h1>
          </div>
          <div className="col-12 text-center">
            <p>Bienvenue chez TechnoMaroc, où la technologie rencontre l'innovation du commerce de détail ! Fondée en 2024, nous sommes une entreprise technologique de commerce électronique dynamique et avant-gardiste qui se consacre à révolutionner l'expérience d'achat en ligne..</p>
          </div>
          <div className="col-md-12 col-lg-4 text-center mb-3">
            <h3>Service client</h3>
            <a className="nav-link fw-bold mb-3" href="https://api.whatsapp.com/send?phone=212613998112" target="_blank">
              <img src={whatsappImage} width="30px" alt=""/> What's up
            </a>
            <a className="nav-link fw-bold mb-3" href="https://mail.google.com/" target="_blank"><img src={envelopeImage} width="30px" alt=""/> Email</a>
          </div>
          <div className="col-md-12 col-lg-4 text-center mb-3">
            <h3>Payer avec</h3>
            <div className="mb-3">
              <a className="nav-link" aria-current="page" href="panier">
                <img src={paymentImage} width="150px" alt=""/>
              </a>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 text-center">
            <h3 className="md-3">Rester connecté</h3>
            <a className="nav-link fw-bold mb-3" href="https://www.facebook.com/" target="_blank"><img src={facebookImage} width="30px" alt=""/> FaceBook</a>
            <a className="nav-link fw-bold mb-3" href="https://www.instagram.com/" target="_blank"><img src={instagramImage} width="30px" alt=""/> Instagram</a>
        </div>
      </div>
    </div>
    );
}
export default Footer;