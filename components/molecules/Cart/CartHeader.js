import { CartHead } from "../../../styles/Cart.Styles";
import CloseIcon from "@material-ui/icons/Close";
import  { ProductTitle as DrawerTitle } from './../../../styles/Pages/Products.Styles';


export default function CartHeader({cartItems,closeDrawer}) {
  return (
    <div>
      <CartHead>
        <DrawerTitle> My Cart &nbsp; ({cartItems.length} Items)</DrawerTitle>
        <CloseIcon color="secondary" onClick={closeDrawer(false)} />
      </CartHead>
    </div>
  );
}
