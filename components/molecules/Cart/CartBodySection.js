import Item from "./Items";
import EmptyCartTemplate from './../../atoms/Cart/EmptyCart';
import { CartBody } from "../../../styles/Cart.Styles";

export default function CartBodySection({ cartItems, getPrice }) {
  return (
    <div>
      <CartBody>
        {Array.isArray(cartItems) &&
          cartItems.length !== 0 &&
          cartItems.map((item) => (
            <Item key={item} Item={item} getIndividualItemPrice={getPrice} />
          ))}
        {cartItems.length == 0 && <EmptyCartTemplate />}
      </CartBody>
    </div>
  );
}
