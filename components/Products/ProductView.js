import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/user";
import {
  ProductCardStyles,
  ProductDescription,
  ProductTitle,
  ProductBottomGrid,
} from "../../styles/Pages/Products.Styles";

export default function ProductView({ product }) {
  const dispatch = useDispatch();

  const { name, imageURL, description, price } = product;

  const moveToCart=(product)=>{
        dispatch(addToCart(product));
  }

  return (
    <ProductCardStyles>
      <ProductTitle>{name}</ProductTitle>
      <img src={imageURL} alt={name} />
      <ProductDescription>{description}</ProductDescription>
      <ProductBottomGrid>
        <p>MRP &nbsp; Rs{price}</p>
        <Button
          onClick={() =>{ moveToCart(product)}}
          size="small"
          variant="contained"
          color="secondary"
        >
          Buy Now
        </Button>
      </ProductBottomGrid>
    </ProductCardStyles>
  );
}
