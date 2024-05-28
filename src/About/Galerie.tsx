import person_image1 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc (1).jpeg";
import person_image2 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc (2).jpeg";
import person_image3 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc (3).jpeg";
import person_image4 from "../image/aboutImg/pikaso_texttoimage_staff-member-of-technomaroc.jpeg";
import person_image5 from "../image/aboutImg/pikaso_texttoimage_staff-member.jpeg";

import "aos/dist/aos.css"
function Galerie() {

  return (
    <div className="container-fluid bg-dark py-5" id="Gallery">
      <div className="container">
        <div className="main-title mt-1 mb-2 position-relative text-white text-center">
          <h2 className="text-uppercase display-6">Staff Members</h2>
        </div>
        <div className="row g-3" data-aos="fade-right">
          <div className="col-lg-12">
            <div className="row g-3">
              <div className="col-lg-12">
                <img
                  className="img-fluid w-100 h-100 img-thumbnail border-3"
                  src={person_image1}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid w-100 h-100 img-thumbnail border-3"
                  src={person_image2}
                />
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid w-100 h-100 img-thumbnail border-3"
                  src={person_image3}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid w-100 h-100 img-thumbnail border-3"
                  src={person_image4}
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid w-100 h-100 img-thumbnail border-3"
                  src={person_image5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Galerie;
