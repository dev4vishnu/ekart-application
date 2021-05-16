import styled from "styled-components";

const Promo = styled.div`
  background-color: white;
  margin: 15px 12px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  img {
    width: 75px;
    height: auto;
    margin-left:5px;
  }
  span {
    margin-left: 30px;
    font-size: 12px;
    color: black;
  }
`;

function PromotionBanner() {
  return (
    <Promo>
      <img alt="low-price-promo" src="static/images/lowest-price.png" />
      <span>You won't find it cheaper anymore</span>
    </Promo>
  );
}
export default PromotionBanner;
