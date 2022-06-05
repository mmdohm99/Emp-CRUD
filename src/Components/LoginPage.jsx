import { useNavigate } from "react-router-dom";
import "../Styles/login.css";

import { useState, useContext } from "react";
import AuthContext from "../Module/AuthProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const LogInPage = () => {
  const [inEmailValue, setInEmailValue] = useState("");
  const [inPasswordValue, setInPasswordValue] = useState("");
  const { setAuth } = useContext(AuthContext);
  const signUPemail = localStorage.getItem("email");
  const signUPpass = localStorage.getItem("password");
  const navigate = useNavigate();

  console.log({ inEmailValue, signUPemail, inPasswordValue, signUPpass });
  const handleSignIn = () => {
    if (inEmailValue === signUPemail && inPasswordValue === signUPpass) {
      setAuth({ user: inEmailValue, pwd: inPasswordValue });
      navigate("/users", { replace: true });
    } else {
      alert("Wronge password or Email");
    }
  };

  return (
    <div className="formcontainer">
      <form className="form">
        <h1>LogIn</h1>

        <TextField
          className="input"
          onChange={(e) => setInEmailValue(e.target.value)}
          id="outlined-search"
          label="someone@gmail.com "
        />

        <TextField
          className="input"
          onChange={(e) => setInPasswordValue(e.target.value)}
          id="outlined-search"
          label="Password "
        />

        <Button
          className="input"
          type="button"
          disabled={!inEmailValue || !inPasswordValue}
          onClick={handleSignIn}
          variant="outlined"
        >
          {" "}
          Login{" "}
        </Button>

        <button
          className="textbutton"
          type="button"
          onClick={() => navigate("/signup", { replace: true })}
        >
          Dont Have an account ? sign up
        </button>
      </form>
    </div>
  );
};
