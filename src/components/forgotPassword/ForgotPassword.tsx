import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Box, Button, Container, Dialog, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./ForgotPassword.module.scss";

import { useActions } from "../../hooks/useActions";
import Icon from "../../preloader/images/_primitives/loading.png";
import {
  errorSelector,
  isRecoveredSelector,
  loadingSelector,
} from "../../store/signIn/selectors";

type Inputs = {
  email: string;
};

const ForgotPassword = () => {
  const error = useSelector(errorSelector);
  const isLoading = useSelector(loadingSelector);
  const isRecovered = useSelector(isRecoveredSelector);
  const { openGmailModal, cleanErrorAction, recoverPassword } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => {
    recoverPassword(data);
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Dialog
          id="draggable-dialog-title"
          open={true}
          onClose={() => {
            openGmailModal({ type: "", isOpen: false });
            cleanErrorAction();
          }}
          aria-labelledby="outlined-error-helper-text"
        >
          {isRecovered ? (
            <div>
              <div>Verification message was sent to your email.</div>
              <div>Please confirm your email to reset your password.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogTitle className={styles.title} id="draggable-dialog-title">
                Email
              </DialogTitle>
              <Box mb={2} className={styles.input}>
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
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
              </Box>
              {isLoading && (
                <img className={styles.img} src={Icon} alt="mySvgImage" />
              )}
              {<div className={styles.error}> {error}</div>}
              <Button
                className={styles.button}
                type="submit"
                variant="contained"
                value="Sign in"
                color="primary"
                fullWidth
                disableElevation={isLoading}
              >
                Recover Password
              </Button>
            </form>
          )}
        </Dialog>
      </Container>
    </div>
  );
};

export default ForgotPassword;
