import arrowImg from "../image/box-arrow-in-left.svg";
import personImage from"../image/person-circle.svg"

function SigninLoginBig(){
  const iconWidth = "25px"
  
    return (
			<ul className="navbar-nav me-1 ms-lg-1">
				<li className="nav-item d-lg-flex d-none gap-4">
					<a className="nav-link fw-bold" aria-current="page" data-bs-toggle="modal" data-bs-target="#logInModal" href="#">Log in <img src={arrowImg} width={iconWidth} alt=""/></a>
					<a className="nav-link fw-bold" aria-current="page" data-bs-toggle="modal" data-bs-target="#signUpModal" href="#">Sign Up <img src={arrowImg} width={iconWidth} alt=""/></a>
				</li>
				<li className="nav-item d-none d-lg-flex gap-4 me-3 d-lg-none">
					<a className="nav-link fw-bold" aria-current="page" data-bs-toggle="modal" data-bs-target="#logInModal" href="#"><img src={personImage} width={iconWidth} alt=""/> My Profile</a>
				</li>
			</ul>
		);
}
export default SigninLoginBig;