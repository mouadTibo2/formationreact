
import PhoneCategory from "./PhoneCategory";
import ConsoleCategory from "./ConsoleCategory";
import { useState } from "react";
import OffCanvas from "../Panier/OffCanvas";



export interface ItemProductsProps {
    count : number;
    panierList: any[]; 
    setCount: Function;
    setPanierList: Function;
  }

export default function ItemProducts(){
    const[panierList, setPanierList] = useState([]);
    const[count, setCount] = useState(0);
    
/*     console.log(count);
    console.log(panierList); */
    return(
    <>
    <PhoneCategory count ={count} panierList={panierList} setCount={setCount} setPanierList={setPanierList}/> 
    <ConsoleCategory count ={count} panierList={panierList} setCount={setCount} setPanierList={setPanierList}/>
    <OffCanvas count ={count} panierList={panierList} setCount={setCount} setPanierList={setPanierList}/>
    </>
    );
}