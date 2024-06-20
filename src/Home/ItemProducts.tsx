
import PhoneCategory from "./PhoneCategory";
import ConsoleCategory from "./ConsoleCategory";
import { useState } from "react";
import OffCanvas from "../Panier/OffCanvas";



export interface ItemList{
    addToList: Function; 
  }
export interface ItemProductsProps {
    count: number;
    setCount: Function;
    panierList: Array<any>;
    setPanierList: Function;
    addToList: Function; 
}
export default function ItemProducts(){
    const [panierList, setPanierList] = useState([]);
    const [count, setCount] = useState(0);
    
    function addToList(addedToCart:{}){
        setPanierList([...panierList, addedToCart]);
        setCount(count => count + 1);
       
    }
    
/*     console.log(count);
    console.log(panierList);  */
    return(
    <>
    <PhoneCategory addToList={addToList} panierList={panierList}/> 
    <ConsoleCategory addToList={addToList} panierList={panierList}/>
    <OffCanvas count ={count} panierList={panierList} setCount={setCount} setPanierList={setPanierList}/>
    </>
    );
}