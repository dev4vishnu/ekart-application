import styled from "styled-components";

export const ProductListing = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
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
  height: 100vh;
  background-color: #cacacd;
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
    color: #646464;
    text-decoration: none;
    list-style: none;
    border-bottom: 2px solid #dedee0;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
  margin-top: 10px;
  margin-left: 15px;
`;

export const ProductCardStyles = styled.div`
  display: grid;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  padding: 5px;
  img {
    margin: 0 auto;
    height: 80px;
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
`;

export const ProductTitle = styled.div`
  font-weight: 700;
  margin: 0.5rem 0.5rem;
  height: 35px;
`;

export const ProductDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  margin: 12px 4px;
  background-color: #f2f5f4;
  align-items: center;
  min-height: 60px;
`;

export const ProductBottomGrid = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items:center;
    p{
      font-weight:600;
      color:black;
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    },
`;

export const SoldOutStyle = styled.div`
 background-color: #ff0000;
    color: #fff;
    font-size: 24px;
    height: 65px;
    margin-right: 8%;
    padding: 90px;
`