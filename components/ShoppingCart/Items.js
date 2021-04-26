import { Grid,Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import useStyles from "../../styles/Cart.Styles";
import { useState } from "react";


export default function Item({ Item}) {
  const classes = useStyles();
  const { imageURL,id, name,price} = Item;
  const [quantity, setQuantity] = useState(0);

  const incrementCount = (productId) => {
    setQuantity(quantity++);
  };

  const decrementCount = (productId) => {
    setQuantity(quantity - 1);
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
                <Button className={classes.btnStyle} disabled={false}>
                <RemoveCircleOutlineIcon color="secondary" onClick={()=>{decrementCount}} />
                </Button>
              </Grid>
              <Grid item className={classes.ItemQt}>{quantity}</Grid>
              <Grid item>
                <AddCircleIcon color="secondary" onClick={()=>{incrementCount}} />
              </Grid>
              <Grid item className={classes.ItemQt}>
                  X  &nbsp; {price}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.netWorth}>Rs.{netAmount}</Grid>
    </Grid>
  );
}
