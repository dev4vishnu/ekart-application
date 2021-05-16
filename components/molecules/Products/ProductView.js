import { useDispatch } from "react-redux";
import { addToCart, snackbarMessage } from "./../../../redux/action/user";
import {
  ProductCardStyles,
  ProductDescription,
  ProductTitle,
} from "./../../../styles/Pages/Products.Styles";
import BuyProductButton from "./../../atoms/Products/BuyProductButton";

export default function ProductView({ product }) {
  const dispatch = useDispatch();

  const { name, imageURL, description, price } = product;

  const moveToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(snackbarMessage("Product added to cart"));
  };

  return (
    <ProductCardStyles>
      <div className="right-border-effect">
        <ProductTitle><b>{name}</b></ProductTitle>
        <img src={imageURL} alt={name} />
        <ProductDescription>{description}</ProductDescription>
        <BuyProductButton
          price={price}
          product={product}
          moveToCart={moveToCart}
        />
      </div>
    </ProductCardStyles>
  );
}
