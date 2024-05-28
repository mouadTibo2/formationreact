import { CSSProperties } from "react";
import { Products } from "./ProductsData";

import { ItemProductsProps } from "./ItemProducts";
type T = /*unresolved*/ any;

function ConsoleCategory(props: ItemProductsProps) {
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
  const consoleData = Products.filter(
    (console) => console.category == "consoles"
  );
  const Data = consoleData.map((console) => {
    return (
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
        <div className="card-body row">
          <div className="col-4 text-start">
            <h4 className="phone_title">{console.type}</h4>
            <p className="fs-5">
              <a href="produit.html" id="phone 1">
                see more
              </a>
            </p>
          </div>
          <div className="col-8 text-end">
            <p className="fs-4 phone_prix">
              {console.prix}
              <span>DH</span>
            </p>
            <p className="fs-4 ">
              <button
                className="btn btn-primary"
                onClick={() =>
                  panierItems([
                    console.id,
                    console.image,
                    console.type,
                    console.quatite,
                    console.prix,
                  ])
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
        <h1>Consoles</h1>
      </div>
      <>{Data}</>
    </div>
  );
}
export default ConsoleCategory;
