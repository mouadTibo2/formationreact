import { CSSProperties } from "react";

import { Products } from "./ProductsData";
import { ItemProductsProps } from "./ItemProducts";

function PhoneCategory(props: ItemProductsProps) {
  const style: CSSProperties = {
    width: "380px",
  };

  function panierItems([...item]) {
    props.setCount(props.count + 1);
    props.setPanierList([
      {
        id: item[0],
        image: item[1],
        type: item[2],
        quatite: item[3],
        prix: item[4],
      },
      ...props.panierList,
    ]);
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
        <div className="card-body row">
          <div className="col-6 text-start">
            <h4 className="phone_title">{phone.type}</h4>
            <p className="fs-5">
              <a href="produit.html" id="phone 1">
                see more
              </a>
            </p>
          </div>
          <div className="col-6 text-end">
            <p className="fs-4 phone_prix">
              {phone.prix}
              <span>DH</span>
            </p>
            <p className="fs-4 ">
              <button
                className="btn btn-primary"
                onClick={() =>
                  panierItems([phone.id, phone.image, phone.type, phone.quatite,phone.prix])
                }
              >
               + add to cart +
              </button>
            </p>
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
