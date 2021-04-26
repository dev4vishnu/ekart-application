import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    itemImg:{
        width: '80px', 
        height: '80px',
        padding: '1rem' 
    },
    btnStyle:{
        margin:0,
        padding:0,
        minWidth:'2px',
    },
    root:{
        margin:'2px',
        border: '1px solid #cacaca'
    },
    itemName:{
        fontSize:'13px',
        fontWeight:'700',
        color:'black'
        
    },
    addOrRemoveItem:{
        width:'100%',
        fontSize:'12px',
        color:'black',
        alignItems:'center'
    },
    ItemQt:{
        alignItems:'center',
        padding:'5px',
    },
    addOrRemoveItem:{
        paddingTop:'10px',
        color:'black',
    },
    netWorth:{
        paddingTop:'10px',
        paddingRight:'10px',
        color:'black',
        fontSize:'13px',
        fontWeight:600,
    }
  });
  
export default useStyles;

export const DrawerRootStyle = styled.div`
  min-width: 350px;
  background-color: black;
  color: #fff;
  height: auto;
  padding-top: 10px;
  /* padding-left: 15px; */

  @media (max-width: 450px) {
    min-width: 100%;
  }
`;

export const CartHead = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
`;

export const CartBody = styled.div`
  padding: 5px;
  background-color: #f5f5f5;
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
