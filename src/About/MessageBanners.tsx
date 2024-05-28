import { Link } from "react-router-dom";
import houseImg from"../image/house.svg";

import "aos/dist/aos.css"


function MessageBanners(){

    return (
	<div className="w-100 vh-100 d-flex justify-content-center align-items-center myposition">
		<div className="content text-center ">
			<h1 className="display-1 text-white text-uppercase fw-bold" data-aos="fade-right">Techno<span className="text-danger">Maroc</span></h1>
			<p className="text-primary fw-bold text_change" data-aos="fade-left">
					Welcome to our e-commerce platform, your premier destination for cutting-edge technology devices delivered right to your doorstep
			</p>
			<Link to="/" className="btn btn-info btn-lg me-3" data-aos="zoom-in">  
				<img src={houseImg} width="30px" alt=""/>  
				shop
			</Link>
		</div>
	</div>
	);
}
export default MessageBanners;