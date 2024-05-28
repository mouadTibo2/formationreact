import person_image1 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc (1).jpeg";
import person_image2 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc (2).jpeg";
import person_image3 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc (3).jpeg";
import person_image4 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc.jpeg";
import person_image5 from "../image/aboutImg/pikaso_texttoimage_staff-member.jpeg";

import "aos/dist/aos.css";
function Footer(){
  const style : React.CSSProperties = {
    maxWidth: "400px"
  }
 
    return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" data-aos="fade-up">
      <div className="container py-5">
        <div className="row g-5"> 
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>rue 48, khabazat KENITRA </p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i> +212 613558815</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i> mouadtiob02@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://web.facebook.com"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                  <div className="col-4">                            
                    <span className="icon-search2"></span>
                    <img className="img-fluid bg-light p-1" src={person_image1}/>                          
                  </div>
                  <div className="col-4">                            
                    <span className="icon-search2"></span>
                    <img className="img-fluid bg-light p-1" src={person_image2}/>
                  </div>
                  <div className="col-4">                         
                    <span className="icon-search2"></span>
                    <img className="img-fluid bg-light p-1" src={person_image3}/>                           
                  </div>
                  <div className="col-4">                            
                    <span className="icon-search2"></span>
                    <img className="img-fluid bg-light p-1" src={person_image4}/>                            
                  </div>
                  <div className="col-4">          
                    <span className="icon-search2"></span>
                    <img className="img-fluid bg-light p-1" src={person_image5}/>                           
                  </div>
              </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Newsletter</h4>
            <p>Participez à notre Newsletter :</p>
            <div className="position-relative mx-auto" style={style}>
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Footer;