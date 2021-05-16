import { ProductBottomGrid,useStyles } from '../../../styles/Pages/Products.Styles';
import { Button } from '@material-ui/core/';

export default function BuyProductButton({price,product,moveToCart}) {
  const classes = useStyles();
  return (
    <>
      <ProductBottomGrid>
        <p className={classes.mrp}>MRP  Rs.{price}</p>
        <Button
          onClick={() => {
            moveToCart(product);
          }}
          size="small"
          variant="contained"
          color="secondary"
          classes={{root:classes.buyButton}}
        >
          Buy Now
        </Button>
      </ProductBottomGrid>
    </>
  );
}
