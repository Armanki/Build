import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button, Container, Dialog, Slider, Typography } from "@mui/material";

import styles from "./UserAvatar.module.scss";

import { useActions } from "../../hooks/useActions";

const dogImg =
  "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

const UseAvatar = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const { openSignInModal, cleanErrorAction } = useActions();

  return (
    <div>
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
          <div className={styles.cropContainer}>
            <Cropper
              cropShape="round"
              showGrid={false}
              image={dogImg}
              crop={crop}
              zoom={zoom}
              aspect={1}
              restrictPosition={true}
              onCropChange={setCrop}
              onZoomChange={setZoom}
            />
          </div>
          <div className={styles.controls}>
            <div className={styles.sliderContainer}>
              <Typography variant="overline" className={styles.sliderLabel}>
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                className={styles.slider}
                onChange={(e, zoom: any) => setZoom(zoom)}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className={styles.cropButton}
            >
              Show Result
            </Button>
          </div>
        </Dialog>
      </Container>
    </div>
  );
};

export default UseAvatar;
