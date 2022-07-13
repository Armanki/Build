import * as React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, Button, Container, Dialog, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import styles from "../../layouts/ProfileLayout/Account/ProfilePopups/PasswordPopup/PasswordPopup.module.scss";
import style from "./SingIn.module.scss";

import { useActions } from "../../hooks/useActions";
import Icon from "../../preloader/images/_primitives/loading.png";
import { errorSelector, loadingSelector } from "../../store/signIn/selectors";

type Inputs = {
  password: string;
  username: string;
};
const SingIn = () => {
  interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const { openSignInModal, loginAccount, cleanErrorAction } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => {
    loginAccount(data);
    console.log(data, 121212121);
  };

  return (
    <>
      {
        <Container maxWidth="xs">
          <Dialog
            id="draggable-dialog-title"
            open={true}
            onClose={() => {
              openSignInModal({ type: "", isOpen: false });
              cleanErrorAction();
            }}
            aria-labelledby="outlined-error-helper-text"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogTitle className={style.title} id="draggable-dialog-title">
                Sign in
              </DialogTitle>
              <Box mb={2} className={style.input}>
                <TextField
                  variant="outlined"
                  label="Email"
                  fullWidth
                  autoComplete="username"
                  autoFocus
                  {...register("username", {
                    required: "Required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.username}
                  helperText={errors?.username ? errors.username.message : null}
                />
              </Box>
              <Box mb={2} className={style.input}>
                <TextField
                  type={values.showPassword ? "text" : "password"}
                  variant="outlined"
                  label="Password"
                  fullWidth
                  autoComplete="password"
                  autoFocus
                  {...register("password", {
                    required: "Required field",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/,
                      message: "Invalid password address",
                    },
                  })}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                />
                <div className={styles.icon}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </Box>
              <a
                className={style.forgotPass}
                onClick={() =>
                  openSignInModal({ type: "forgotPassword", isOpen: true })
                }
              >
                Forgot Password ?
              </a>
              <Button
                className={style.button}
                type="submit"
                variant="contained"
                value="Sign in"
                color="primary"
                fullWidth
                disableElevation={isLoading}
              >
                <Link className={style.buttonLink} to={"/"}>
                  Sign In
                </Link>
              </Button>
              <div className={style.signUp}>
                <span>No account?</span>
                <a
                  className={style.more}
                  onClick={() =>
                    openSignInModal({ type: "signUp", isOpen: true })
                  }
                >
                  Sign up
                </a>
              </div>
              {isLoading && (
                <img className={style.img} src={Icon} alt="mySvgImage" />
              )}
              {<div className={style.error}> {error}</div>}
            </form>
          </Dialog>
        </Container>
      }
    </>
  );
};
export default SingIn;
