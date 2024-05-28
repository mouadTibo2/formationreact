import { CSSProperties } from "react";
import produit1 from "../image/iphone14_1.jpeg";
import produit2 from "../image/PS5_console_2.jpg";
import produit3 from "../image/samsung-s22_1.jpg";

function Carousel(){

    return (
      <div id="carouselExampleInterval" className="carousel carousel-dark slide container-md" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active " data-bs-interval="10000">
          <a href="#"><img src={produit1} className="d-block carouselimg" alt="iphone14_1"/></a>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <a href="#"><img src={produit2} className="d-block carouselimg" alt="PS5_console_2"/></a>
        </div>
        <div className="carousel-item">
          <a href="#"><img src={produit3} className="d-block carouselimg" alt="samsung-s22_1"/></a>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next text-success" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    );
}
export default Carousel;