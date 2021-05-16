import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

export const LoginCardStyle = styled.div`
    padding: 3rem;
    margin: 2rem auto;
    padding-top: 1rem;
`
export const MainTitleStyle = styled.h2`
    margin:0;
    font-weight:600;
    font-size:29px;
    color:'black';
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const useStyles = makeStyles({
    loginButton: {
      borderRadius: 0,
      color: "white",
      marginTop:'30px',
      textTransform:'none',
      fontWeight:600,
      fontFamily:'Dosis',
    },
    signupForm:{
        width:'50%',
        height:'100%',
    },
    textField:{

    },
    inputLabel:{
        fontSize:'14px',
    },
    loginHeaderBox:{
        marginBottom:'60px',
    },
    input:{
        fontSize:'13px'
    },
    container:{
        height: '15rem',
    },
    item:{
        height:'100%',
    },
    textFieldForm:{
        margin:'16px 0',
    }
  });