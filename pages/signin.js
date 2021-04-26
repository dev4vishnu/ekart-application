import { useEffect } from 'react';
import { useFormik } from "formik";
import {useDispatch} from "react-redux";
import { useRouter } from "next/router";

import { Button, Grid,TextField } from "@material-ui/core/";
import { signInValidationSchema } from "./../utils/validationSchema";
import { LoginCardStyle, MainTitleStyle, useStyles } from './../styles/Pages/SignIn.Styles';
import { login } from './../redux/action/user';

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const route = useRouter();

  useEffect(() => {
    dispatch(login({userDetails: {}, status: false}))
  },[]);

  const formik = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "Password",
    },
    validationSchema: signInValidationSchema,

    onSubmit: (values) => {
      const data = {userDetails: values, status: true}
      dispatch(login(data));
      route.push("/home");
    },
  });

  return (
    <LoginCardStyle>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <MainTitleStyle>Login</MainTitleStyle>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </Grid>
        <Grid item>
          <form onSubmit={formik.handleSubmit}>
            <TextField
            //   placeholder="test@test.com"
              className={classes.textField}
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button disableElevation classes={{root:classes.loginButton}}  color="secondary" variant="contained" fullWidth type="submit">
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
    </LoginCardStyle>
  );
};

export default SignIn;
