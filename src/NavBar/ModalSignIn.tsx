import { useState } from "react";

function ModalSignIn() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [signInEmail, setSignInEamil] = useState("");
  const [signInPassword1, setSignInPassword1] = useState("");
  const [signInPassword2, setSignInPassword2] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street1, setStreet1] = useState("");
  const [city1, setCity1] = useState("");
  const [zip1, setZip1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city2, setCity2] = useState("");
  const [zip2, setZip2] = useState("");

  function handleChangeSignInUserName(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let userName = event.target.value;
    userName = userName.replace(/ /g, "");
    setUserName(userName);
  }
  function handleChangeSignInFirstname(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let firstName = event.target.value;
    firstName = firstName.replace(/ /g, "");
    setFirstname(firstName);
  }
  function handleChangeSignInLastname(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let lastName = event.target.value;
    lastName = lastName.replace(/ /g, "");
    setLastname(lastName);
  }
  function handleChangeSignInEmail(event: React.ChangeEvent<HTMLInputElement>) {
    let email = event.target.value.trim();
    email = email.replace(/ /g, "");
    email.match("@gmail.") ? setSignInEamil(email) : setSignInEamil("");
  }
  function handleChangeSignInPassword1(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let password = event.target.value;
    password = password.replace(/ /g, "");
    setSignInPassword1(password);
  }
  function handleChangeSignInPassword2(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let password = event.target.value;
    password = password.replace(/ /g, "");
    setSignInPassword2(password);
  }
  function handleSlectedSignInGender(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    let gender = event.target.value;
    setGender(gender);
  }
  function handleChangeSignInNumber(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let phoneNumber = event.target.value;
    setPhoneNumber(phoneNumber);
  }
  function handleChangeSignInStreet1(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let street1 = event.target.value;
    setStreet1(street1);
  }
  function handleChangeSignInCity1(event: React.ChangeEvent<HTMLInputElement>) {
    let city1 = event.target.value;
    setCity1(city1);
  }
  function handleChangeSignInZip1(event: React.ChangeEvent<HTMLInputElement>) {
    let zip1 = event.target.value;
    setZip1(zip1);
  }
  function handleChangeSignInStreet2(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let street2 = event.target.value;
    setStreet2(street2);
  }
  function handleChangeSignInCity2(event: React.ChangeEvent<HTMLInputElement>) {
    let city2 = event.target.value;
    setCity2(city2);
  }
  function handleChangeSignInZip2(event: React.ChangeEvent<HTMLInputElement>) {
    let zip2 = event.target.value;
    setZip2(zip2);
  }
  function handleSubmit() {
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
    console.log(signInEmail);
    console.log(signInPassword1);
    console.log(signInPassword2);
    console.log(gender);
    console.log(phoneNumber);
    console.log(street1 + city1 + zip1);
    console.log(street2 + city2 + zip2);
  }

  const style: React.CSSProperties = {
    fontSize: "15px",
    color: "#0d6efd",
  };
  return (
    <div
      className="modal fade "
      id="signUpModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-3" id="exampleModalLabel">
              TechnoMaroc/Sign Up <span style={style}>Créez votre compte</span>
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Nom d'utilisateur:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={(event) => handleChangeSignInUserName(event)}
                  placeholder="Nom d'utilisateur"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Nom et prénom:
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => handleChangeSignInFirstname(event)}
                    placeholder="prénom"
                    aria-label="prénom"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => handleChangeSignInLastname(event)}
                    placeholder="Nom"
                    aria-label="Nom"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="semail" className="form-label">
                  Adresse e-mail:
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(event) => handleChangeSignInEmail(event)}
                  aria-describedby="emailHelp"
                  placeholder="Example@gmail.com"
                />
                <div id="semailHelp" className="form-text text-danger d-none">
                  Un mot de passe ou un e-mail non valide
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="spassword1" className="form-label">
                  mot de passe:
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={handleChangeSignInPassword1}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="spassword2" className="form-label">
                  deuxième mot de passe:
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(event) => handleChangeSignInPassword2(event)}
                />
              </div>
              <select
                className="form-select form-select-lg mb-3"
                onChange={(event) => handleSlectedSignInGender(event)}
              >
                <option value="">Choisissez votre genre</option>
                <option value="male">Mâle</option>
                <option value="female">Femelle</option>
                <option value="other">Autre</option>
              </select>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Numéro de téléphone:
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => handleChangeSignInNumber(event)}
                  placeholder="XXXXXXXXXX"
                  aria-label="number"
                  maxLength={10}
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Address 1:
                </label>
                <div className="input-group me-5">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => handleChangeSignInStreet1(event)}
                    placeholder="Porte,rue"
                    aria-label="number"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => handleChangeSignInCity1(event)}
                    placeholder="ville"
                    aria-label="city"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="number"
                    className="form-control"
                    onChange={(event) => handleChangeSignInZip1(event)}
                    maxLength={5}
                    placeholder="zip"
                    aria-label="zip"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Address 1:
                </label>
                <div className="input-group me-5">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => handleChangeSignInStreet2(event)}
                    placeholder="Porte,rue"
                    aria-label="number"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="text"
                    className="form-control"
                    onChange={(event) => handleChangeSignInCity2(event)}
                    placeholder="ville"
                    aria-label="ville"
                    aria-describedby="basic-addon1"
                  />
                  <input
                    type="number"
                    className="form-control"
                    onChange={(event) => handleChangeSignInZip2(event)}
                    maxLength={5}
                    placeholder="zip"
                    aria-label="zip"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mx-3">
            <p className="text-end">
              Je ai déjà un compte?{" "}
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#logInModal"
                className="text-warning-emphasistext-info"
              >
                log in ici
              </a>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleSubmit}
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalSignIn;
