import "aos/dist/aos.css";

function Service(){

  return(
    <div className="container-xxl mt-5" id="Service">
      <div className="container">
        <div className="row g-4" >
          <div className="col-sm-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <div className="alert alert-info mx-2 text-center pt-3 h-100" role="alert">                                      
              <h5 className="mb-4">Catalogue de produits</h5>  
              <p className="card-text">
                Un catalogue complet présentant une large gamme de dispositifs technologiques, notamment des smartphones, des ordinateurs portables, des tablettes, des consoles de jeux, des montres connectées, et bien plus encore.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <div className="alert alert-info mx-2 text-center pt-3 h-100" role="alert">                                     
              <h5 className="mb-4">Commande en ligne sécurisée</h5>  
              <p className="card-text h-100">
                Un système de commande en ligne convivial et sécurisé qui permet aux clients de parcourir les produits, de les ajouter à leur panier, et de finaliser leurs achats en toute simplicité.
              </p>
            </div>
          </div>    
          <div className="col-sm-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <div className="alert alert-info mx-2 text-center pt-3 h-100" role="alert">                                      
              <h5 className="mb-4">Avis et notes des produits</h5>  
              <p className="card-text">
                Accès à des avis et des notes authentiques des produits d'autres utilisateurs pour aider les clients à prendre des décisions d'achat éclairées.</p>
            </div>
          </div>    
          <div className="col-sm-12 col-md-6 col-lg-3" data-aos="zoom-out">
            <div className="alert alert-info mx-2 text-center pt-3 h-100" role="alert">
              <h5 className="mb-4">Support client</h5>  
              <p className="card-text">
                Des services de support client réactifs pour répondre à toutes les questions, préoccupations ou problèmes que les clients peuvent avoir avant, pendant ou après leur achat.
              </p>
            </div>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default Service;