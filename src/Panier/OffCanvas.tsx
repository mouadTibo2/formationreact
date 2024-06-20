
import PanierPage from "./PanierPrix"
import ChosenItems from "./ChosenItems"

import { ItemProductsProps } from "../Home/ItemProducts";

export default function OffCanvas ( props:ItemProductsProps ){
  return(
    <>  
      
      <div className="offcanvas offcanvas-end" tabIndex={1} id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Mon Panier <span className="ms-5">{props.count} Items</span></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <div className="container-fluid .bg-light mb-5">
              {/* panier container  */}

                <div className="row gap-3 justify-content-center">
                  {/* panier body */}
                  <div className="col-12 bg-light shadow-lg">
                    <div className="row gap-3 ">
                      {/* ChosenItems component */} 
                      <ChosenItems count ={props.count} setCount={props.setCount} panierList={props.panierList} setPanierList={props.setPanierList}/>
                    </div>
                  </div> 
                </div>

            </div>
            <div className="col-12 bg-light shadow-lg">
              <div className="row g-3 p-3 justify-content-between">
                {/* panier prix */}
                <PanierPage panierList={props.panierList} setPanierList={props.setPanierList}/>
              </div>
            </div>
        </div>
      </div>
    </>  
  );
}