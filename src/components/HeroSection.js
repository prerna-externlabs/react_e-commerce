import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from "react-router-dom";


const HeroSection = ({myData}) => {
    const { name } = myData;
  return (
    <Wrapper>
   <div className='container'>
   <div className='grid grid-two-column'>
   <div className='hero-section-data'>
   <p className='intro-data'>Welcome to </p>
   <h2>{name}</h2>
   <p>An ecommerce business uses digital methods to sell products and services to customers. Ecommerce businesses can be online-only or have a physical presence as well. Selling to customers online typically requires a website or digital storefront, plus a way to process payments digitally and ship orders to customers.
   </p>
   <NavLink>
   <button className='btn'>Shop Now</button>
   </NavLink>
   </div>
   <div className='hero-section-image'>
   <img src="./images/shopping.jpg" alt="my img"  className="img-style"/>
   </div>
   
   </div>
   </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 padding: 12rem 0;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }


  .intro-data {
    margin-bottom: 0;
  }

  .btn {
  border: none;
  background-color: skyblue;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
}


.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}
`;
export default HeroSection;