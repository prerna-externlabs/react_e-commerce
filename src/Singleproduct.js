import { useEffect } from "react";
import "../src/style/singleproduct.css";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/Productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <>
    <PageNavigation title={name} />
    <div className="container">
      <div className="grid grid-two-column">
        {/* product img */}
        <div className="product-images">
        <MyImage imgs={image} />
   
        </div>
        {/* product data */}
        <div className="product-data">
          <h2>{name}</h2>
          <p className="product-data-price product-data-real-price">
            Deal of the Day:{price}
          </p>
          <p>{description}</p>
          <div className="product-data-warranty">
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Thapa Delivered </p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 Year Warranty </p>
            </div>
          </div>
          <div className="product-data-info">
          <p>Available:
          <span>{stock > 0 ?"In Stock" : "Not Avalible"}</span>
          </p>
          <p>
            ID: <span>{id}</span>
          </p>
          <p>
            Brand: <span>{company}</span>
          </p>
          </div>
          <hr/>
          {stock > 0 && <AddToCart product={singleProduct} />}
        
        </div>
      </div>
    </div>
  </>
  );
}



export default Singleproduct;