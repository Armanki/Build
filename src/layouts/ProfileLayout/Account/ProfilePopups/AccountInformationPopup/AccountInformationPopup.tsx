import * as React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Box, Button, Container, Dialog, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./AccountInformationPopup.module.scss";

import { useActions } from "../../../../../hooks/useActions";
import { profileData } from "../../../../../store/profile/selectors";

type Inputs = {
  password: string;
  email: string;
};
const AccountInformationPopup = (props: any) => {
  const { data } = useSelector(profileData);
  const { openSignInModal } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (d: any) => {
    alert(JSON.stringify(d));
  };

  return (
    <Container maxWidth="xs">
      <Dialog
        id="draggable-dialog-title"
        open={true}
        onClose={() => openSignInModal({ type: "", isOpen: false })}
        aria-labelledby="outlined-error-helper-text"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle className={styles.title} id="draggable-dialog-title">
            Account Information
          </DialogTitle>
          <Box className={styles.input} mb={2}>
            <TextField
              value={data?.firstName}
              variant="outlined"
              label="First Name"
              fullWidth
              autoComplete="firstName"
              autoFocus
            />
          </Box>
          <Box mb={2} className={styles.input}>
            <TextField
              value={data?.lastName}
              variant="outlined"
              label="Last Name"
              fullWidth
              autoComplete="lastName"
              autoFocus
            />
          </Box>
          <Box mb={2} className={styles.input}>
            <TextField
              value={"BuildOptima"}
              variant="outlined"
              label="Company "
              fullWidth
              autoComplete="password"
              autoFocus
            />
          </Box>

          <div className={styles.buttonRow}>
            <Button
              className={styles.button}
              onClick={onSubmit}
              type="submit"
              variant="contained"
              value="Save Changes"
              color="primary"
              fullWidth
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Dialog>
    </Container>
  );
};
export default AccountInformationPopup;
