import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  itemImg: {
    width: "80px",
    height: "80px",
    padding: "1rem",
  },
  btnStyle: {
    margin: 0,
    padding: 0,
    minWidth: "2px",
  },
  root: {
    margin: "2px",
    border: "1px solid #cacaca",
  },
  itemName: {
    fontSize: "13px",
    fontWeight: "700",
    color: "black",
  },
  addOrRemoveItem: {
    width: "100%",
    fontSize: "12px",
    color: "black",
    alignItems: "center",
  },
  ItemQt: {
    alignItems: "center",
    padding: "5px",
  },
  addOrRemoveItem: {
    paddingTop: "10px",
    color: "black",
  },
  netWorth: {
    paddingTop: "10px",
    paddingRight: "10px",
    color: "black",
    fontSize: "13px",
    fontWeight: 600,
  },
});

export default useStyles;

export const DrawerRootStyle = styled.div`
  min-width: 350px;
  color: #fff;
  height: 100%;
  position: relative;

  @media (max-width: 450px) {
    min-width: 100%;
  }
`;

export const CartHead = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #000;
  align-items: center;
`;

export const CartBody = styled.div`
  padding: 5px;
  background-color: #f5f5f5;
  height: 390px;
`;

export const ItemCard = styled.div`
  display: "grid";
  grid-template-columns: "1fr 2fr 1fr";

  .item-img {
    width: "80px";
    height: "80px";
    padding: "1rem";
  }
`;

export const CartFooter = styled.div`
  background-color: #f50241;
  bottom: 0;
  color: #fff;
  font-weight: 500;
  height: 40px;
  text-align: center;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .btn-style{
    text-transform:none;
    color:#fff;
    font-weight:bolder;
  }
`;
