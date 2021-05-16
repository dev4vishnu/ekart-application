import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  buyButton: {
    textTransform: "none",
    height: "24px",
    borderRadius: 0,
    color: "white",
    fontSize: "11px",
    fontFamily: "Dosis",
  },
});

export const ProductListing = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto)); */

  /* 4 in row with 1140vw==== */
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(51px, 184px));

  /*   repeat(auto-fit,minmax(200px,156px)) */

  /* ===== 3 in a row with 900wv==== */
  /* display: flex;
    grid-template-columns: repeat(auto-fit,minmax(154px,213px)); 
  ;*/

  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
    grid-gap: 1rem;
    width: 100%;
  }
`;

export const LeftSideNavStyle = styled.div`
  width: 250px;
  background-color: #ececec;
  padding: 5px;
  line-height: "1rem";
  ul {
    margin: 0;
    padding: 0;
    padding-left: 5px;
  }
  li {
    padding: 6px;
    font-weight: 500;
    border: 0;
    color: #928c8c;
    text-decoration: none;
    list-style: none;
    border-bottom: 1px solid #c2c2c3;
    padding: 10px;
  }
  li:hover {
    cursor: pointer;
    color: #ff0000;
    font-weight: 900;
  }
`;

export const ProductsGridStyle = styled.div`
  display: grid;
  grid-template-columns: inherit;
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  margin-top: 20px;
  margin-left: 15px;
  margin-bottom: 55px;
`;

export const ProductCardStyles = styled.div`
  display: grid;
  /* box-shadow: 1.5px 0.5px 2px 0px rgb(0 0 0 / 20%); */
  padding: 5px;
  /* border: 0.5px solid #dedede; */
  border-bottom: 1px dashed #cdcdcd;
  img {
    /* margin: 0 auto;
    height: 80px;
    padding-top: 45px;
    display: flex; */
    margin: 0 auto;
    height: auto;
    padding-top: 25px;
    display: flex;
    width: 7rem;
  }
  .product-price {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  button {
    border-radius: 0;
  }

  /* ============shadow effect ===== */
  .right-border-effect {
    position: relative;
  }
  .right-border-effect:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 20px;
    right: 0px;
    left: 185px;
    width: 0.1px;
    top: 15%;
    max-width: 1px;
    background: #d8d4d424;
    box-shadow: 3px 0px 4px 0px #ccc6c6;
    transform: rotate(1deg);
  }
`;

export const ProductTitle = styled.div`
  font-weight: 200;
  height: 40px;
  padding-top: 20px;
  font-size: 16px;
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
  margin-left: 0.5rem;
`;

export const ProductDescription = styled.div`
overflow: hidden;
    text-overflow: ellipsis;
    margin: 12px 0px;
    background-color: #f5f5f5;
    align-items: center;
    height: 54px;
    padding: 5px;
    font-size: 11px;
    font-weight: 100;
`;

export const ProductBottomGrid = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  p {
    font-size: 11px;
    font-weight: 300;
    color: black;
    font-family: "Dosis";
    margin-left: 3px;
  }
`;

export const SoldOutStyle = styled.div`
  background-color: #ff0000;
  color: #fff;
  font-size: 24px;
  /* height: 65px; */
  margin-right: 8%;
  padding: 15px;
  width: 10rem;
`;
