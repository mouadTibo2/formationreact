

interface ProductsList {
  panierList: any[]
  setPanierList: Function;
}

export default function PanierPage(porps:ProductsList){
    return(
      <>
        <div className="col-12">
            {/* panier prix item 1 */}
          <div className="row my-1">
            <div className="col-6">
              <p className="fw-bold fs-5">produit 1</p>
            </div>
            <div className="col-6">
              <p className="text-end"><span>dh</span></p>
            </div>
          </div>
          {/* panier prix item 1 */}
          <div className="row my-1">
            <div className="col-6">
              <p className="fw-bold fs-5">produit 1</p>
            </div>
            <div className="col-6 ">
              <p className="text-end"><span>dh</span></p>
            </div>
          </div>
          {/* panier prix item 1 */}
          <div className="row my-1">
            <div className="col-6">
              <p className="fw-bold fs-5">produit 1</p>
            </div>
            <div className="col-6">
              <p className="text-end"><span>dh</span></p>
            </div>
          </div>
        </div>
        {/* prix total + la validation */}
        <div className="col-12">
          <div className="row my-1">
            <div className="col-6">
              <p className="fw-bold fs-5">Prix total:</p>
            </div>
            <div className="col-6">
              <p className="text-end" id="prixTotal"><span>dh</span></p>
            </div>
            <div className="col-12" >
              <a className="btn btn-success w-100" href="#">Valide votre achat</a>
            </div>
          </div>
        </div>
      </>
    );
          
}
