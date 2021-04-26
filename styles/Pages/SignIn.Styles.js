import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

export const LoginCardStyle = styled.div`
    padding:3rem;
    margin: 10px auto;
`
export const MainTitleStyle = styled.h2`
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
    },
    signupForm:{
        width:'50%',
    },
  });