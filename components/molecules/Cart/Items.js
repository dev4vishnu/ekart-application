import { Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import useStyles from "../../../styles/Cart.Styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from './../../../redux/action/user';


export default function Item({ Item, getIndividualItemPrice,ItemList }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { imageURL, id, name, price } = Item;
  const [quantity, setQuantity] = useState(1);

  const incrementCount = (id) => {
    let newQty = quantity + 1;
    setQuantity(newQty);
    let netAmount = price * newQty;
    getIndividualItemPrice(id, netAmount);
  };

  const decrementCount = (id) => {
    if(quantity!==1){
      let newQty = quantity - 1;
      setQuantity(newQty);
      let netAmount = price * newQty;
      getIndividualItemPrice(id, netAmount);
    }else{
      let newList = ItemList.filter(item => item.id !== id)
      dispatch(updateCart(newList));
    }
  };
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item className={classes.imgDiv}>
        <img src={imageURL} className={classes.itemImg} />
      </Grid>
      <Grid item className={classes.detailsDiv}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item className={classes.itemName}>
            {" "}
            {name}{" "}
          </Grid>
          <Grid item className={classes.addOrRemoveItem}>
            <Grid container alignItems="center">
              <Grid item>
                <Button
                  className={classes.btnStyle}
                  // disabled={quantity == 1 ? true : false}
                >
                  <RemoveCircleOutlineIcon
                    color="secondary"
                    onClick={() => {
                      decrementCount(id);
                    }}
                  />
                </Button>
              </Grid>
              &nbsp;&nbsp;
              <Grid item className={classes.ItemQt}>
                {quantity}
              </Grid>
              &nbsp;&nbsp;
              <Grid item>
                <Button className={classes.btnStyle}>
                  <AddCircleIcon
                    color="secondary"
                    onClick={() => {
                      incrementCount(id);
                    }}
                  />
                </Button>
              </Grid>
              <Grid item className={classes.ItemQt}>
                &nbsp;X &nbsp; Rs.{price}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.netWorth}>
        Rs.{price * quantity}
      </Grid>
    </Grid>
  );
}
