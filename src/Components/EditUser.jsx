import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
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

export function TransitionsModal({ addUser, user, editUser }) {
  const [newuser, setNewUser] = useState({
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
  ////////////////////////////////////////////////

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newuser, [name]: value });
    console.log(newuser);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editUser(newuser);
    setNewUser({ name: "", email: "", username: "", phone: "", website: "" });
    // console.log(newuser)
  };
  ////////////////////////////////////////////////////////
  return (
    <div>
      <Button
        style={{ color: "orange", border: "1px solid orange" }}
        type="button"
        onClick={handleOpen}
      >
        <EditIcon /> Edit User
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
            <Typography id="transition-modal-title" variant="h3" component="h2">
              Edit User
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              <form onSubmit={handleSubmit}>
                Name:
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="name"
                  value={newuser.name}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Name "
                />
                <br />
                Email:
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="email"
                  value={newuser.email}
                  onChange={handleChange}
                  id="outlined-search"
                  label="E-mail "
                />
                <br />
                UserName:
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="username"
                  value={newuser.username}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Username "
                />
                <br />
                Phone:
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="phone"
                  value={newuser.phone}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Phone "
                />
                <br />
                Website:
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="website"
                  value={newuser.website}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Website "
                />
                <br />
                <hr />
                <Button type="submit" value="Add User" variant="outlined">
                  Save
                </Button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
