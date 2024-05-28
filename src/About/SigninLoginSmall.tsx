import arrowImg from "../image/box-arrow-in-left.svg";
import personImage from"../image/person-circle.svg"

function SigninLoginSmall(){
  const iconWidth = "25px"
  
    return (
    <ul className="navbar-nav">
      <li className="nav-item d-flex gap-4 d-lg-none me-3 ">
        <a className="nav-link fw-bold" aria-current="page" data-bs-toggle="modal" data-bs-target="#logInModal" href="#">Log in <img src={arrowImg} width={iconWidth} alt=""/></a>
        <a className="nav-link fw-bold" aria-current="page" data-bs-toggle="modal" data-bs-target="#signUpModal" href="#">Sign Up <img src={arrowImg} width={iconWidth} alt=""/></a>
      </li>
      <li className="nav-item d-flex gap-4 d-lg-none me-3 d-none">
        <a className="nav-link" aria-current="page" data-bs-toggle="modal" data-bs-target="#logInModal" href="#"><img src={personImage} width={iconWidth} alt=""/> My Profile</a>
      </li>
    </ul>
    );
}
export default SigninLoginSmall;