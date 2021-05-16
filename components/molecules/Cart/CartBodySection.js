import Item from "./Items";
import EmptyCartTemplate from "./../../atoms/Cart/EmptyCart";
import { CartBody } from "../../../styles/Cart.Styles";
import PromotionBanner from "./PromotionBanner";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function CartBodySection({ cartItems, getPrice }) {
  const CartArray = useSelector((state) => state.userCart);

  useEffect(() => {}, [CartArray]);

  return (
    <div>
      <CartBody>
        {Array.isArray(cartItems) &&
          cartItems.length !== 0 &&
          cartItems.map((item) => (
            <Item
              key={item}
              Item={item}
              getIndividualItemPrice={getPrice}
              ItemList={cartItems}
            />
          ))}
        {cartItems.length !== 0 && <PromotionBanner />}
        {cartItems.length == 0 && <EmptyCartTemplate />}
      </CartBody>
    </div>
  );
}
