import { useReducer } from "react";

interface ProductsList {
  panierList: any[]
  setPanierList: Function;
}
const reducer = (state, action) => {
  
  return state;
}

export default function PanierPage( props:ProductsList){
  const initialState = {money: 0};
  const arrayPrix = props.panierList.map(item =>{
    return item.prix
  })
console.log(arrayPrix); 
  const [state, dispatch] = useReducer(reducer, initialState);
  const listSlectedPrix = props.panierList.map((item, index) => {
    return(
      <div className="row my-1" key={item.id}>
        <div className="col-6">
          <p className="fw-bold fs-5">{item.type}</p>
        </div>
        <div className="col-6">
          <p className="text-end">{item.prix}<span>DH</span></p>
        </div>
      </div>
    );
  });

    return(
      <>
        <div className="col-12">
            {/*all panier prix */}
            {listSlectedPrix}     
        </div>
        {/* prix total + la validation */}
        <div className="col-12">
          <div className="row my-1">
            <div className="col-6">
              <p className="fw-bold fs-5">Prix total:</p>
            </div>
            <div className="col-6">
              <p className="text-end" id="prixTotal">{}<span>dh</span></p>
            </div>
            <div className="col-12" >
              <a className="btn btn-success w-100" href="#">Valide votre achat</a>
            </div>
          </div>
        </div>
      </>
    );
          
}
