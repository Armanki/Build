import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, Container, TextField } from "material-ui-core";

import styles from "./Recover.module.scss";

import { useActions } from "../../hooks/useActions";
import Icon from "../../preloader/images/_primitives/loading.png";
import { errorSelector, loadingSelector } from "../../store/signIn/selectors";
import UrlParams from "../../utils/urlParams/UrlParams";

type Inputs = {
  newPassword: string;
  password: string;
  username: string;
};
function Recover() {
  const isLoading = useSelector(loadingSelector);
  const { search } = useLocation();
  const error = useSelector(errorSelector);
  const params = UrlParams(search);
  const { forgotPassword } = useActions();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: any) => {
    const allData = { ...data, ...params };
    forgotPassword(allData, history);
  };
  return (
    <div>
      <Container maxWidth="xs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle className={styles.title} id="draggable-dialog-title">
            ADD NEW PASSWORD
          </DialogTitle>
          <Box mb={2} className={styles.input}>
            <TextField
              type="password"
              variant="outlined"
              label="New Password"
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
              error={!!errors?.newPassword}
              helperText={
                errors?.newPassword ? errors.newPassword.message : null
              }
            />
          </Box>
          <Box mb={2} className={styles.input}>
            <TextField
              type="password"
              variant="outlined"
              label="Repeat Password"
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
              error={!!errors?.newPassword}
              helperText={
                errors?.newPassword ? errors.newPassword.message : null
              }
            />
          </Box>
          <Button
            className={styles.button}
            type="submit"
            variant="contained"
            value="Sign in"
            color="primary"
            fullWidth
            disableElevation={isLoading}
          >
            RECOVER
          </Button>
          {isLoading && (
            <img className={styles.img} src={Icon} alt="mySvgImage" />
          )}
          {<div className={styles.error}> {error}</div>}
        </form>
      </Container>
    </div>
  );
}

export default Recover;
