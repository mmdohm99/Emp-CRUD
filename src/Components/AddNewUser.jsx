import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useContext } from "react";
import { UsersContext } from "../Module/UsersModule";
// import { UsersContext}  from "../modules/UsersModule"
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

export default function TransitionsModal(props) {
  const { addUser } = useContext(UsersContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    website: "",
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //////////////////////////////////////////////////(Functions)/////////////////////////////////////////////
  ///the below [name] is computed property used to link the chanege in the input with the event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((currentUser) => ({ ...currentUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
    setUser({ name: "", email: "", username: "", phone: "", website: "" });
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <Button
        style={{
          border: "1px solid blue",
          borderRadius: "5px",
          margin: "10px",
        }}
        type="button"
        onClick={handleOpen}
      >
        <AddIcon /> Add User
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Please fill the form
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/*//////////////////////////////////////////// Form ///////////////////////////////////////////////////////////////////// */}
              <form onSubmit={handleSubmit}>
                <TextField
                  type="text"
                  className="input"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Name "
                />
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  id="outlined-search"
                  label="E-mail "
                />
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Username "
                />
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Phone "
                />
                <br />
                <TextField
                  type="text"
                  className="input"
                  name="website"
                  value={user.website}
                  onChange={handleChange}
                  id="outlined-search"
                  label="Website "
                />

                <br />
                <hr />
                <Button type="submit" value="Add User" variant="outlined">
                  Submit
                </Button>
              </form>
              {/*//////////////////////////////////////////// Form ///////////////////////////////////////////////////////////////////// */}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
