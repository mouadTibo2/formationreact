



import houseImg from "../image/house.svg";
import personArmsImg from "../image/person-arms-up.svg";
import cart from "../image/cart.svg";
import imageImg from "../image/image.svg";
import journalCheckImg from "../image/journal-check.svg";


import { Link } from "react-router-dom";

import { useState } from "react";



export default function PageNav( ){
	const iconWidth = "25px";
  const [pageNumber, setPageNumber] = useState(true);
 
  const changeToPageAbout= () => {
   setPageNumber(prevPageNumber => prevPageNumber = !pageNumber);
  
  }
  const changeToPageShop= () => {
  setPageNumber(prevPageNumber => prevPageNumber = !pageNumber);
  }
  console.log(pageNumber);

  if(pageNumber === true){
    return (
		<>
			<li className="nav-item" key={1}>
				<Link to="/" className="nav-link"> 
					<img src={houseImg} width={iconWidth} alt=""/> 
					Home
				</Link>  
			</li>
			<li className="nav-item " key={2}>
				<Link to="/AboutPage" className="nav-link" onClick={changeToPageAbout}> 
					<img src={personArmsImg} width={iconWidth} alt="" /> 
					About Us
				</Link>
			</li>
			<li className="nav-item" key={3}>
      <button className="btn btn-light m-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"> 
        <span className="text-danger">
          0<img src={cart} width={iconWidth} alt="" />
        </span>
      </button>
			</li>
			</>
    );
  }
else if(pageNumber === false){
  return(
    <>
      <li className="nav-item" key={1}>
        <Link to="/" className="nav-link"> 
          <img src={houseImg} width={iconWidth} alt="" onClick={changeToPageShop}/> 
          Home
        </Link>  
      </li>
      <li className="nav-item" key={2}>
        <Link to="/AboutPage" className="nav-link"> 
          <img src={personArmsImg} width={iconWidth} alt=""/> 
          About Us
        </Link>
      </li>
      <li className="nav-item" key={3}>
      <button className="btn btn-light m-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"> 
        <span className="text-danger">
          0<img src={cart} width={iconWidth} alt="" />
        </span>
      </button>
			</li>
      <li className="nav-item" key={4}>
        <a className="nav-link" aria-current="page" href="#Gallery"> 
          <img src={imageImg} width={iconWidth} alt="" /> 
          Gallery
        </a>
      </li>
      <li className="nav-item" key={5}>
        <a className="nav-link" aria-current="page" href="#Service">
          <img src={journalCheckImg} width={iconWidth} alt="" /> 
          Service
        </a>
      </li>
    </>
  );
}
}