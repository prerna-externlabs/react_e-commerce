import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Productlist from "./components/Productlist";
import Sort from "./components/Sort";
// import { useFilterContext } from "./context/filter_context";

const Product = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <Productlist />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

 
`;

export default Product;