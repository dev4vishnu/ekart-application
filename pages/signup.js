import { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { Button, Grid, TextField } from "@material-ui/core/";
import { signUpValidationSchema } from "./../utils/validationSchema";
import {
  LoginCardStyle,
  MainTitleStyle,
  useStyles,
} from "./../styles/Pages/SignIn.Styles";
import { userSignUp, login, snackbarMessage } from "./../redux/action/user";

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const route = useRouter();

  useEffect(() => {
    dispatch(login({ userDetails: {}, status: false }));
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: signUpValidationSchema,

    onSubmit: (values) => {
      dispatch(snackbarMessage("Registration successful"));
      dispatch(userSignUp(values));
      route.push("/signin");
    },
  });

  return (
    <LoginCardStyle>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        classes={{ container: classes.container }}
      >
        <Grid item className={classes.item}>
          <MainTitleStyle>Sign Up</MainTitleStyle>
          <p>We do not share your personal details with anyone</p>
        </Grid>
        <Grid item className={classes.signupForm}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              classes={{ root: classes.textField }}
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              InputLabelProps={{
                classes: { root: classes.inputLabel },
              }}
              InputProps={{
                classes: {
                  input: classes.input,
                  formControl: classes.textFieldForm,
                },
              }}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              classes={{ root: classes.textField }}
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              InputLabelProps={{
                classes: { root: classes.inputLabel },
              }}
              InputProps={{
                classes: {
                  formControl: classes.textFieldForm,
                  input: classes.input,
                },
              }}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              classes={{ root: classes.textField }}
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              InputLabelProps={{
                classes: { root: classes.inputLabel },
              }}
              InputProps={{
                classes: {
                  formControl: classes.textFieldForm,
                  input: classes.input,
                },
              }}
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
              InputLabelProps={{
                classes: { root: classes.inputLabel },
              }}
              InputProps={{
                classes: {
                  formControl: classes.textFieldForm,
                  input: classes.input,
                },
              }}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              fullWidth
              id="cpassword"
              name="cpassword"
              label="Confirm Password"
              type="password"
              value={formik.values.cpassword}
              onChange={formik.handleChange}
              error={
                formik.touched.cpassword && Boolean(formik.errors.cpassword)
              }
              InputLabelProps={{
                classes: { root: classes.inputLabel },
              }}
              InputProps={{
                classes: {
                  formControl: classes.textFieldForm,
                  input: classes.input,
                },
              }}
              helperText={formik.touched.cpassword && formik.errors.cpassword}
            />
            <Button
              disableElevation
              classes={{ root: classes.loginButton }}
              color="secondary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </Grid>
      </Grid>
    </LoginCardStyle>
  );
}
