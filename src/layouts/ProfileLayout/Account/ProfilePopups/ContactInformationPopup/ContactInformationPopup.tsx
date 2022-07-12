import * as React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, Container, TextField } from "material-ui-core";

import styles from "./ContactInformationPopup.module.scss";

import { useActions } from "../../../../../hooks/useActions";
import Icon from "../../../../../preloader/images/_primitives/loading.png";
import { profileData } from "../../../../../store/profile/selectors";
import {
  errorSelector,
  loadingSelector,
} from "../../../../../store/signIn/selectors";

type Inputs = {
  phone: number;
  email: string;
  password: string;
  username: string;
};
export default function ContactInformationPopup() {
  const isLoading = useSelector(loadingSelector);
  const { data } = useSelector(profileData);
  const error = useSelector(errorSelector);
  const { openSignInModal, cleanErrorAction } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    console.log(data);
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
            Contact Information
          </DialogTitle>

          <div className={styles.inputsWrap2}>
            <Box className={styles.input} mb={2}>
              <TextField
                value={data?.email}
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
                value={data?.phone}
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
      </Dialog>
    </Container>
  );
}
