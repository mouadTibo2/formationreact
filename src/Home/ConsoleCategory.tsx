import { CSSProperties } from "react";
import { Products } from "./ProductsData";
import { useState } from "react";
import { ItemList } from "./ItemProducts";

function ConsoleCategory(props: ItemList) {
  const style: CSSProperties = {
    width: "380px",
  };

  function panierItems([...item]) {
    props.addToList(
      {
        id: item[0],
        image: item[1],
        type: item[2],
        quatite: item[3],
        prix: item[4],
      }  
    );
    /* on add to cart*/

  }

  const [quantite, setQuantite] = useState(1);
  function handelQuantiteIncrease(){
    quantite >= 1 ? setQuantite(quantite + 1): quantite;
   
  }
  function handelQuantiteDecrease(){
    quantite > 1 ? setQuantite(quantite - 1): quantite;
  }
    
  const consoleData = Products.filter(
    (console) => console.category == "consoles"
  );
  const Data = consoleData.map((console) => {
    return(
      <div
        key={console.id}
        className="col-sm-12 col-md-6 col-lg-3 card"
        style={style}
      >
        <a href="#">
          <img
            src={console.image}
            className="phone_image card-img-top p-5"
            alt="..."
          />
        </a>
        <div className="card-body">
          <div className="row">
            <div className="col-6 text-start">
              <h4 className="phone_title">{console.type}</h4>
            </div>
            <div className="col-6 text-end">
              <p className="fs-4 phone_prix">
                {console.prix}
                <span>DH</span>
              </p>
            </div>
          </div>
          <div className="row">
          <div className="col-6 text-start">
              <p className="fw-bold ">
                <button className="btn btn-success me-2"  onClick={() => handelQuantiteIncrease()}>+</button>
                <button className="btn btn-danger me-2"  onClick={() => handelQuantiteDecrease()}>-</button>
                {quantite} piece
              </p>
          </div>
            <div className="col-6 text-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  panierItems([console.id, console.image, console.type, quantite,console.prix])
                }
              >
                + add cart +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row gap-2 justify-content-center my-3">
      <div className="text-center">
        <h1>Consoles</h1>
      </div>
      <>{Data}</>
    </div>
  );
}
export default ConsoleCategory;
