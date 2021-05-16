import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  itemImg: {
    width: "65px",
    height: "auto",
    padding: "10px",
  },
  btnStyle: {
    margin: 0,
    padding: 0,
    minWidth: "2px",
  },
  root: {
    // margin: "2px",
    borderTop: "10px solid #fff",
  },
  itemName: {
    fontSize: "14px",
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
    width:'40px',
  },
  detailsDiv:{
    width:'270px',
  },
  imgDiv:{
    width:'85px',
  },
});

export default useStyles;

export const DrawerRootStyle = styled.div`

  /* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  min-width: 100%;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  min-width: 350px;
  color: #fff;
  height: 100%;
  position: relative;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  min-width: 350px;
  color: #fff;
  height: 100%;
  position: relative;
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
  /* padding: 5px; */
  background-color: #f5f5f5;
  height: 399px;
  position:relative;
  overflow-y:auto;
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
    font-family:'Dosis';
    font-weight:400;
  }
`;
