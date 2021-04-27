import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { Button } from "@material-ui/core/";
import CartHeader from "./../../molecules/Cart/CartHeader";
import CartBodySection from "../../molecules/Cart/CartBodySection";
import { clearCart, snackbarMessage } from "./../../../redux/action/user";
import { CartFooter, DrawerRootStyle } from "../../../styles/Cart.Styles";

export default function CartContent({ closeDrawer }) {
  const dispatch = useDispatch();
  const CartArray = useSelector((state) => state.userCart);

  let cartItems = [...new Set(CartArray)];
  const [netAmount, setTotalAmount] = useState(0);

  const finalBill = new Object();

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      finalBill[`${item.id}`] = item.price;
    });
    for (let key in finalBill) {
      if (finalBill.hasOwnProperty(key)) {
        total = total + finalBill[key];
      }
    }
    setTotalAmount(total);
  }, []);

  const getPrice = (productId, price) => {
    let total = 0;
    finalBill[`${productId}`] = price;
    for (let key in finalBill) {
      if (finalBill.hasOwnProperty(key)) {
        total = total + finalBill[key];
      }
    }
    setTotalAmount(total);
  };

  const proceedToCheckOut = () => {
      closeDrawer(false)
    dispatch(snackbarMessage("Thank you for shopping with us !"));
    dispatch(clearCart());
  };
  return (
    <DrawerRootStyle>
      <CartHeader cartItems={cartItems} closeDrawer={closeDrawer} />
      <CartBodySection cartItems={cartItems} getPrice={getPrice} />
      <CartFooter>
        {cartItems.length == 0 ? (
          <Button className="btn-style" onClick={closeDrawer(false)}>
            {" "}
            Start Shopping{" "}
          </Button>
        ) : (
          <Button className="btn-style" onClick={()=>proceedToCheckOut()}>
            Proceed to checkout &nbsp; Rs.{netAmount}
          </Button>
        )}
      </CartFooter>
    </DrawerRootStyle>
  );
}
