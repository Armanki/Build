import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";

import styles from "./SignOut.module.scss";

import { useActions } from "../../hooks/useActions";
import User from "../../preloader/images/_primitives/User.png";

function SignOut() {
  const [state, setState] = React.useState("");
  const { openSignInModal, removeLoginState } = useActions();

  const handleChange = (event: any) => {
    setState(event.target.value);
  };
  const remove = () => {
    localStorage.removeItem("token");
    removeLoginState();
  };
  const togglePopup = () => {
    openSignInModal({ type: "avatarPopup", isOpen: true });
  };

  return (
    <div>
      <a onClick={() => togglePopup()}>
        {<img className={styles.img} src={User} />}
      </a>
      <FormControl sx={{ minWidth: 130 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Profile</InputLabel>
        <Select
          className={styles.row}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={state}
          autoWidth
          onChange={handleChange}
          label="Profile"
        >
          <MenuItem value={10}>
            <Link
              className={styles.link}
              to={"/profile/account/f8eaf0bb-2432-4317-8b20-d0e0394e1b23"}
            >
              My Account
            </Link>
          </MenuItem>
          <MenuItem value={24} onClick={remove}>
            <Link className={styles.link} to={"/"}>
              LogOut
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SignOut;
