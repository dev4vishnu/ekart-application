import { Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import useStyles from "../../styles/Cart.Styles";
import { useState } from "react";

export default function Item({ Item, getIndividualItemPrice }) {
  const classes = useStyles();
  const { imageURL, id, name, price } = Item;
  const [quantity, setQuantity] = useState(1);

  const incrementCount = (id) => {
    let newQty = quantity + 1;
    setQuantity(newQty);
    let netAmount = price * newQty;
    getIndividualItemPrice(id, netAmount);
  };

  const decrementCount = (id) => {
    let newQty = quantity - 1;
    setQuantity(newQty);
    let netAmount = price * newQty;
    getIndividualItemPrice(id, netAmount);
  };
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      <Grid item>
        <img src={imageURL} className={classes.itemImg} />
      </Grid>
      <Grid item>
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
            <Grid container>
              <Grid item>
                <Button
                  className={classes.btnStyle}
                  disabled={quantity == 1 ? true : false}
                >
                  <RemoveCircleOutlineIcon
                    color="secondary"
                    onClick={() => {
                      decrementCount(id);
                    }}
                  />
                </Button>
              </Grid>
              <Grid item className={classes.ItemQt}>
                {quantity}
              </Grid>
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
