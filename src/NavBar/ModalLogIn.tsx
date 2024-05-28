import { useState } from "react";


function ModalLogIn() {
  const [logInEmail, setLogInEamil] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  function handleChangelogInEmail(event: React.ChangeEvent<HTMLInputElement>){
		let email = event.target.value.trim();
		email = email.replace(/ /g, "");
		email.match("@gmail.")? setLogInEamil(email): setLogInEamil("");
	}
  function handleChangelogInPassword(event: React.ChangeEvent<HTMLInputElement>){
		let password = event.target.value;
		password = password.replace(/ /g, "");
    setLogInPassword(password);
  }
	
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
		console.log(logInEmail);
		console.log(logInPassword);
	}
  const style : React.CSSProperties = {
    fontSize: "15px",
    color: "#0d6efd",
  };
  return (
    <div
      className="modal fade"
      id="logInModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-3" id="exampleModalLabel">
              TechnoMaroc/Log In{" "}
              <span style={style}>accéder à votre compte</span>
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                <label htmlFor="logInEmail" className="form-label">
                  Adresse e-mail:
                </label>
                <input
                  type="email"
                  className="form-control"
									
                  onChange={(event) =>handleChangelogInEmail(event)}
                  placeholder="Example@gmail.com"
                />
                <div id="lemailHelp" className="form-text text-danger d-none">
                  Un mot de passe ou un e-mail non valide
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="logInPassword" className="form-label">
                  mot de passe:
                </label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(event) => handleChangelogInPassword(event)}
                />
              </div>
            </form>
          </div>
          <div className="mx-3">
            <p className="text-end">
              Vous n'avez pas encore de compte?
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#signUpModal"
                className="text-warning-emphasistext-info"
              >
                Sign Up ici
              </a>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary" 
              onClick={() =>handleSubmit}
            >
              Connexion 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalLogIn;
