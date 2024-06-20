import trash from"../image/trash3.svg"
import { useState } from "react";
import { ItemProductsProps } from "../Home/ItemProducts";

interface ProductsListObjects{
  id: number;
  image: string;
  type: string;
  quatite:number;
  prix:number;
}

/* quatite is not done */
export default function ChosenItems( props:ItemProductsProps ){

  /* delete product */
  function handelDelete(id:number){
    const updatedList = props.panierList.filter((item) =>{
      /* console.log(i, index); */
      /* console.log(item); */
      return item.id != id ;  
    });
    props.setCount(props.count - 1);
    props.setPanierList(updatedList);
    /* console.log(props.panierList); */
  }
  /* console.log(props.panierList); */
  const listSlected = props.panierList.map((item, index) => {
    return(
      <div className="row mb-2" key={item.id}>
        {/* item image */}
        <div className="col-3 p-1">
          <img src={item.image} width="100%" height="100%" alt=""/>
        </div>
        {/* detail d'item  */}
        <div className="col-6">
          <h5 className="text-start">{item.type}</h5>
          <p className="text-start">{item.prix} DH</p>
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-between input-group">
            <div className="quantite-container">
            <p className="fw-bold text-end">{item.quatite} piece</p>
            </div>
            {/*item  delete button */}
            <div className="mt-1">
              <button className="btn btn-outline-danger" onClick={()=>handelDelete(item.id)}><img src={trash} width="25" alt=""/></button>
            </div>
          </div>
        </div>
      </div>
    );
  })
  return(
    <>
      <div className="col-12 my-2">
        {listSlected}
      </div>

    </>
    );
}