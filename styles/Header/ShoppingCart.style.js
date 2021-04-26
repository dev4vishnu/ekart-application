import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: '8rem',
    textAlign: "center",
  },
  button: {
    borderRadius: 0,
    color: "white",
    fontFamily: "Dosis",
  },
  cartIcon: {
    borderRadius: 0,
    color: "white",
    marginBottom: "2px",
    width:'100%',
    height:'3rem',
  },
  cartLabel:{
    fontWeight: 600,
    color: 'black',
    fontSize:'11px',
    textTransform: "none",
  },
  cartDrawer:{
    top:'82px',
    marginRight:'px',
  }
});

export default useStyles;
