import * as React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Box, Button, Container, TextField } from "material-ui-core";

import styles from "./PasswordPopup.module.scss";

import { useActions } from "../../../../../hooks/useActions";
import Icon from "../../../../../preloader/images/_primitives/loading.png";
import { isChangedSelector } from "../../../../../store/profile/selectors";
import {
  errorSelector,
  loadingSelector,
} from "../../../../../store/signIn/selectors";
type Inputs = {
  newPassword: string;
  password: string;
  oldPassword: string;
};
export default function PasswordPopup() {
  const isChanged = useSelector(isChangedSelector);
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const { changePassword, openSignInModal, cleanErrorAction } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    changePassword(data);
  };
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
        {isChanged ? (
          <div className={styles.passwordChanged}>Password changed ...</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle className={styles.title} id="draggable-dialog-title">
              Password
            </DialogTitle>

            <div className={styles.inputsWrap2}>
              <Box mb={2} className={styles.input}>
                <TextField
                  type={values.showPassword ? "text" : "password"}
                  variant="outlined"
                  label="Current Password"
                  fullWidth
                  autoComplete="oldPassword"
                  autoFocus
                  {...register("oldPassword", {
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

              <Box mb={2} className={styles.input}>
                <TextField
                  type="password"
                  variant="outlined"
                  label="newPassword"
                  fullWidth
                  autoComplete="newPassword"
                  autoFocus
                  {...register("newPassword", {
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
              </Box>
              <Box mb={2} className={styles.input}>
                <TextField
                  type="password"
                  variant="outlined"
                  label="Confirm Password"
                  fullWidth
                  autoComplete="newPassword"
                  autoFocus
                  {...register("newPassword", {
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
              </Box>

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
                Save Changes
              </Button>
            </div>
          </form>
        )}
      </Dialog>
    </Container>
  );
}
