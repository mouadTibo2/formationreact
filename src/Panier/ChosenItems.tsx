import trash from"../image/trash3.svg"
import { useState } from "react";

interface ProductsList {
  panierList: any[];
  setPanierList: Function;
}
interface ProductsListObjects{
  id: number;
  image: string;
  type: string;
  quatite:number;
  prix:number;
}
/* quatite is not done */
export default function ChosenItems( props:ProductsList ){

  function handleQuatiteIncrease(quatite:number){ 
    if(quatite >= 0){
      return quatite = quatite + 1
    }else{
      return quatite
    }
  }
  function handleQuatiteDecrease(quatite:number){
    
    if(quatite > 0){
      return quatite = quatite - 1
    }else{
      return quatite
    }
  }
  /* delete product */
  function handelDelete(id: number){
    console.log(id);
    
  }
 /*  console.log(list); */
  const listSlected = props.panierList.map((item:ProductsListObjects) => {
    return(
      <div className="row mb-2" key={item.id}>
        {/* item image */}
        <div className="col-4 p-2">
          <img src={item.image} width="100%" height="100%" alt=""/>
        </div>
        {/* detail d'item  */}
        <div className="col-4">
          <h5 className="text-start">{item.type}</h5>
          <p className="text-start">prix:{item.prix} </p>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-between input-group">
            <div className="quantite-container">
              <p className="fw-bold">Quantité: {item.quatite}</p>  
              <div className="btn btn-group">
                <button className="btn btn-success me-1" onClick={()=> handleQuatiteIncrease(item.quatite)}>+</button>
                <button className="btn btn-danger" onClick={()=> handleQuatiteDecrease(item.quatite)}>-</button>
              </div>
            </div>
            {/*item  delete button */}
            <div className="mt-1 ms-4">
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