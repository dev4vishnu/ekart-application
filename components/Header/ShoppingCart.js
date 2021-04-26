import { Button, Drawer } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import useStyles from "./../../styles/Header/ShoppingCart.style";
import CartContent from './../ShoppingCart/CartContent';

function ShoppingCart({isLoggedIn,count}) {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
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
          <CartContent />
        </Drawer>
      </div>
    </div>
   }
   </>
  );
}


export default ShoppingCart;
