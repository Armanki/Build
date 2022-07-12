import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Container } from "material-ui-core";

import styles from "./SuccessPopup.module.scss";

import { useActions } from "../../../hooks/useActions";

export default function SuccessPopup() {
  const { openSignInModal } = useActions();
  return (
    <Container maxWidth="xs">
      <Dialog
        id="draggable-dialog-title"
        open={true}
        onClose={() => openSignInModal({ type: "", isOpen: false })}
      >
        <form>
          <DialogTitle className={styles.title} id="draggable-dialog-title">
            Account created ....
          </DialogTitle>
        </form>
      </Dialog>
    </Container>
  );
}
