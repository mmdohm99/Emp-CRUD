import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export function TransitionsModal({ user }) {
  const [newuser] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    phone: user.phone,
    website: user.website,
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  console.log(user);
  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Show User
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h5" component="h3">
              Name:
              {newuser.name}
              <br />
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              Email:
              {newuser.email}
              <br />
              UserName:
              {newuser.username}
              <br />
              Phone:
              {newuser.phone}
              <br />
              Website:
              {newuser.website}
              <br />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
