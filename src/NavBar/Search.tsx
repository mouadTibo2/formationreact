import searchImg from "../image/search.svg";

export default function Search(){
  const iconWidth = "25px";
  return(
    <>
      {/* search bar #small screen */}
      <form className="d-flex w-100 d-lg-none mt-3 mx-3" role="search">
          <input
          className="form-control me-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
          <img src={searchImg} width={iconWidth} alt="" />
          </button>
      </form>
      
      {/* search bar #big screen */}
      <form className="d-lg-flex d-none" role="search">
      <input
          className="form-control me-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
          <img src={searchImg} width={iconWidth} alt="" />
      </button>
      </form>
  </>);
}