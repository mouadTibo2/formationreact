import { CSSProperties } from "react";
import { useState } from "react";
import { Products } from "./ProductsData";
import { ItemList } from "./ItemProducts";

interface itemValue {
  id: number,
  image: string,
  type: string,
  quatite: number,
  addedIsClicked: boolean,
  prix: number,
}
function PhoneCategory(props: ItemList) {
  const style: CSSProperties = {
    width: "380px",
  };
  const [quantite, setQuantite] =useState(1);
  function handelQuantiteIncrease(){
    quantite >= 1 ? setQuantite(quantite + 1): quantite;
   
  }
  function handelQuantiteDecrease(){
    quantite > 1 ? setQuantite(quantite - 1): quantite;
  }
  
  function panierItems([...item]) {
    props.addToList(
      {
        id: item[0],
        image: item[1],
        type: item[2],
        quatite: item[3],
        prix: item[5],
      }  
    );
    /* on add to cart*/
  }
  
  const PhoneData = Products.filter((phone) => phone.category == "phones");

  const Data = PhoneData.map((phone) => {

    return (
      <div
        key={phone.id}
        className="col-sm-12 col-md-6 col-lg-3 card"
        style={style}
      >
        <a href="#">
          <img
            src={phone.image}
            className="phone_image card-img-top p-5"
            alt="..."
          />
        </a>
        <div className="card-body">
          <div className="row">
            <div className="col-6 text-start">
              <h4 className="phone_title">{phone.type}</h4>
            </div>
            <div className="col-6 text-end">
              <p className="fs-4 phone_prix">
                {phone.prix}
                <span>DH</span>
              </p>
            </div>
          </div>
          <div className="row">
          <div className="col-6 text-start">
              <p className="fw-bold ">
                <button className="btn btn-success me-2" onClick={() => handelQuantiteIncrease()} >+</button>
                <button className="btn btn-danger me-2" onClick={() => handelQuantiteDecrease()}>-</button>
                {quantite} piece
              </p>
          </div>
            <div className="col-6 text-end">
            <button
                className="btn btn-primary"
                onClick={() =>
                  panierItems([phone.id, phone.image, phone.type, quantite, phone.prix])
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
        <h1>Phones</h1>
      </div>
      <>{Data}</>
    </div>
  );
}
export default PhoneCategory;
