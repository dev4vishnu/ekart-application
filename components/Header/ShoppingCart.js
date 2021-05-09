import { Button, Drawer } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import useStyles from "./../../styles/Header/ShoppingCart.style";
import CartContent from '../organisms/Cart/index';

function ShoppingCart({isLoggedIn,count}) {
  const classes = useStyles();
  const [state, setState] = useState({ right: false,});

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ right: open });
    console.log("-- Hello ---")
  };

  return (
   <>
   { isLoggedIn &&
      <div className={classes.root}>
      <div>
        <Button
          variant="contained"
          onClick={toggleDrawer("right", true)}
          classes={{root:classes.cartIcon,label: classes.cartLabel}}
          startIcon={<ShoppingCartIcon  color="secondary"/>}
          disableElevation={true}
        >
          {count} Items
        </Button>
        <Drawer
          classes={{paper:classes.cartDrawer}}
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <CartContent closeDrawer={toggleDrawer}/>
        </Drawer>
      </div>
    </div>
   }
   </>
  );
}


export default ShoppingCart;
