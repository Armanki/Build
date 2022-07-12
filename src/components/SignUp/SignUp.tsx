import * as React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, Container, TextField } from "material-ui-core";

import styles from "./SignUp.module.scss";

import { useActions } from "../../hooks/useActions";
import Icon from "../../preloader/images/_primitives/loading.png";
import { errorSelector, loadingSelector } from "../../store/signIn/selectors";
type Inputs = {
  phone: number;
  email: string;
  lastName: string;
  firstName: string;
  password: string;
  username: string;
};
export default function SignUp() {
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const { createAccount, openSignInModal, cleanErrorAction } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    createAccount(data);
  };

  return (
    <Container maxWidth="xs">
      <Dialog
        id="draggable-dialog-title"
        open={true}
        onClose={() => {
          openSignInModal({ type: "", isOpen: false });
          cleanErrorAction();
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle className={styles.title} id="draggable-dialog-title">
            Create Account
          </DialogTitle>
          <div className={styles.inputsWrap}>
            <Box className={styles.firstInput} mb={2}>
              <TextField
                className={styles.input}
                variant="outlined"
                label="First Name"
                fullWidth
                autoComplete="firstName"
                autoFocus
                {...register("firstName", {
                  //^[A-Za-z]{2,20}]*$
                  required: "Required field",
                  pattern: {
                    value: /^[A-Za-z]{2,20}]*$/i,
                    message: "Invalid First Name",
                  },
                })}
                error={!!errors?.firstName}
                helperText={errors?.firstName ? errors.firstName.message : null}
              />
            </Box>

            <Box mb={2}>
              <TextField
                className={styles.input}
                variant="outlined"
                label="Last Name"
                fullWidth
                autoComplete="lastName"
                autoFocus
                {...register("lastName", {
                  required: "Required field",
                  pattern: {
                    value: /^[A-Za-z]{2,20}]*$/i,
                    message: "Invalid Last Name",
                  },
                })}
                error={!!errors?.lastName}
                helperText={errors?.lastName ? errors.lastName.message : null}
              />
            </Box>
          </div>
          <div className={styles.inputsWrap2}>
            <Box className={styles.input} mb={2}>
              <TextField
                variant="outlined"
                label="Email"
                fullWidth
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: "Required field",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email address",
                  },
                })}
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null}
              />
            </Box>
            <Box className={styles.input} mb={2}>
              <TextField
                variant="outlined"
                label="Phone"
                fullWidth
                autoComplete="phone"
                autoFocus
                {...register("phone", {
                  required: "Required field",
                  pattern: {
                    value: /^[+]{1}[0-9]{10,14}$/,
                    message: "Invalid Phone number",
                  },
                })}
                error={!!errors?.phone}
                helperText={errors?.phone ? errors.phone.message : null}
              />
            </Box>
            <Box className={styles.input} mb={2}>
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                autoComplete="password"
                autoFocus
                {...register("password", {
                  required: "Required field",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/,
                    message: "Invalid Password",
                  },
                })}
                error={!!errors?.password}
                helperText={errors?.password ? errors.password.message : null}
              />
            </Box>
            <div className={styles.span}>
              By clicking Create Account, you agree to BuildOptima Terms and
              have read and acknowledged our Privacy Statement
            </div>
            {isLoading && (
              <img className={styles.img} src={Icon} alt="mySvgImage" />
            )}
            {<div className={styles.error}> {error}</div>}
            <Button
              className={styles.button}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disableElevation={isLoading}
            >
              Create Account
            </Button>

            <div className={styles.haveAnAccountWrap}>
              <p>Have an Account?</p>

              <a
                className={styles.signIn}
                onClick={() =>
                  openSignInModal({ type: "signIn", isOpen: true })
                }
              >
                Sign in
              </a>
            </div>
          </div>
        </form>
      </Dialog>
    </Container>
  );
}
