import { CSSProperties } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import ItemProducts from "./ItemProducts";

function ShopPage(){
  const style : CSSProperties = {
    marginTop: "125px"
  }
    return(
    <>
      <div className="container-fluid pt-4" style={style}>
        {/* <!-- carousel --> */}
          <Carousel/>
          <div className="container-fluid my-2">
          {/* <!-- item products--> */}
          <ItemProducts/>
            
          </div>
        {/* Footer */}
          <Footer/>
      </div>
    </>
  );
}
export default ShopPage; 