import { useSelector } from "react-redux";

import { ProductTitle as DrawerTitle } from "../../styles/Pages/Products.Styles";
import {
  DrawerRootStyle,
  CartHead,
  CartBody,
} from "./../../styles/Cart.Styles";
import CloseIcon from "@material-ui/icons/Close";
import Item from "./Items";

export default function CartContent({ handleClose }) {
  const CartArray = useSelector((state) => state.userCart);
  let cartItems = [...new Set(CartArray)];
 

  return (
    <DrawerRootStyle>
      <CartHead>
        <DrawerTitle> My Cart &nbsp; ({cartItems.length} Items)</DrawerTitle>
        <CloseIcon color="secondary" />
      </CartHead>
      <CartBody>
        {cartItems.map((item) => (
          <Item
            key={item}
            Item={item}
          />
        ))}
      </CartBody>
      {/* <CartFooter>
        Proceed to checkout
      </CartFooter> */}
    </DrawerRootStyle>
  );
}
