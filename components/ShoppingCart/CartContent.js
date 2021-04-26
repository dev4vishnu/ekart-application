import { useSelector, useDispatch } from "react-redux";

import { ProductTitle as DrawerTitle } from "../../styles/Pages/Products.Styles";
import {
  DrawerRootStyle,
  CartHead,
  CartBody,
  CartFooter,
} from "./../../styles/Cart.Styles";
import CloseIcon from "@material-ui/icons/Close";
import Item from "./Items";
import { useState, useEffect } from "react";
import EmptyCartTemplate from "./EmptyCart";
import { clearCart } from "../../redux/action/user";
import { Button } from "@material-ui/core/";

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
    dispatch(clearCart({}));
  };
  return (
    <DrawerRootStyle>
      <CartHead>
        <DrawerTitle> My Cart &nbsp; ({cartItems.length} Items)</DrawerTitle>
        <CloseIcon color="secondary" onClick={closeDrawer(false)} />
      </CartHead>
      <CartBody>
        {cartItems &&
          cartItems.map((item) => (
            <Item key={item} Item={item} getIndividualItemPrice={getPrice} />
          ))}
        {cartItems.length == 0 && <EmptyCartTemplate />}
      </CartBody>
      <CartFooter>
        {cartItems.length == 0 ? (
          <Button className="btn-style" onClick={closeDrawer(false)}> Start Shopping </Button>
        ) : (
          <Button className="btn-style"  onClick={proceedToCheckOut,closeDrawer(false)}>
            Proceed to checkoutRs. {netAmount}
          </Button>
        )}
      </CartFooter>
    </DrawerRootStyle>
  );
}
