import pack1 from "../image/PS5_Consoles_1.jpg";
import pack2 from "../image/iphone14_1.jpeg";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";

function Packs(){
  const style : React.CSSProperties = {
    borderRadius: "30px"
  }

  const imagePackWidth = "300px" 
    return (
      <div className="container-fluid  py-5">
        <div className="container">
          <div className="main-title mt-1 mb-2 position-relative text-center" data-aos="zoom-in">
            <i className="fa-solid fa-globe fa-xl my-3"></i>
            <h2 className="text-uppercase display-6" >meilleurs vendeurs</h2>
            <p  className="fs-4">les produits les plus susceptibles d'être acheté par notre client</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-left">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden d-flex justify-content-center">
                  <img className="img-fluid" src={pack1} width={imagePackWidth} alt=""/>
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                    <Link to="/" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={style}>  
                      See store
              			</Link>
                  </div>
                </div>
                <div className="text-center p-4 pb-0 bg-info-subtle">
                  <h3 className="mb-0">Pack 1</h3>
                  <div className="mb-3">
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small>(123)</small>
                  </div>
                  <h5 className="mb-4">PS5 - Manette - +1 jeux</h5>
                  <br/>
                  <h5 className="mb-4">Prix : 10000 DH</h5>
                  <br/>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-right">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden d-flex justify-content-center" >
                  <img className="img-fluid" src={pack2} width={imagePackWidth} alt=""/>
                  <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                  <Link to="/" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={style}>  
                      See store
              			</Link>
                  </div>
                </div>
                <div className="text-center p-4 pb-0 bg-info-subtle">
                  <h3 className="mb-0">Pack 2</h3>
                  <div className="mb-3">
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small className="fa fa-star text-primary"></small>
                      <small>(123)</small>
                  </div>
                  <h5 className="mb-4">iphone14 - casque - charger</h5>
                  <br/>
                  <h5 className="mb-4">Prix : 9000 DH</h5>
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Packs;