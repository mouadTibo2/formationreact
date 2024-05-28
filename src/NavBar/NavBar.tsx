
import SigninLoginSmall from "../About/SigninLoginSmall";
import SigninLoginBig from "../About/SigninLoginBig";
import ModalLogIn from '../NavBar/ModalLogIn';
import ModalSignIn from '../NavBar/ModalSignIn';

import houseImg from "../image/house.svg";
import personArmsImg from "../image/person-arms-up.svg";
import cart from "../image/cart.svg";
import imageImg from "../image/image.svg";
import journalCheckImg from "../image/journal-check.svg";
import { Routes, Route, Link } from "react-router-dom";
import PageNav from "./PageNav";


import AboutPage from "../About/AboutPage";
import ShopPage from "../Home/ShopPage";

function NavBar() {


  

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top border-bottom border-secondary-subtle shadow-sm pb-2">
        <div className="container-fluid ">
          {/* logo */}
          <Link to="/" className="navbar-brand ms-sm-1 text-success"> 
            TechnoMaroc
          </Link>
          {/*  signin login ou profil #small screen */}
          <SigninLoginSmall />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-sm-2"
            id="navbarSupportedContent"
          >
            {/* page navbar */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <PageNav/>
            </ul> 

            {/* signin login ou profil #big screen  */}
            <SigninLoginBig />
          </div>
        </div>

        {/* fin search bar #small screen */}
      </nav>   
        <>
          {/* modal */} 
          <ModalLogIn/>
          <ModalSignIn/>
        </>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/AboutPage/*" element={<AboutPage />}/> 
      </Routes>
    </>
  );
}

export default NavBar;
