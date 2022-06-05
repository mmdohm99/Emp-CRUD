import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
// import axios from "../api/axios";

const USER_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
//Minimum eight characters, at least one letter and one number:
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// const SIGNUP_URL = "/signup";

export const SignUpPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  console.log(emailValue);
  console.log(passwordValue);
  console.log(confirmPasswordValue);

  /////////////////////////////////////////////

  const navigate = useNavigate();

  return (
    <div className="formcontainer">
      <form className="form">
        <h1>SignUp</h1>
        <TextField
          className="input"
          onChange={(e) => setEmailValue(e.target.value)}
          id="outlined-search"
          label="someone@gmail.com "
        />

        <Alert
          className={
            USER_REGEX.test(emailValue) === true || emailValue === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>

        <TextField
          className="input"
          onChange={(e) => setPasswordValue(e.target.value)}
          id="outlined-search"
          label="Password "
        />
        <Alert
          className={
            PWD_REGEX.test(passwordValue) === true || passwordValue === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>

        <TextField
          className="input"
          onChange={(e) => setConfirmPasswordValue(e.target.value)}
          id="outlined-search"
          label="Confirm Password "
        />
        <Alert
          className={
            passwordValue === confirmPasswordValue || passwordValue === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          This is an error alert — check it out!
        </Alert>

        <Button
          className="input"
          type="button"
          onClick={() => {
            localStorage.setItem("email", emailValue);
            localStorage.setItem("password", passwordValue);
            navigate("/login", { replace: true });
          }}
          disabled={
            USER_REGEX.test(emailValue) === false ||
            PWD_REGEX.test(passwordValue) === false ||
            passwordValue !== confirmPasswordValue
          }
          variant="outlined"
        >
          {" "}
          SignUp{" "}
        </Button>

        <button
          className="textbutton"
          type="button"
          onClick={() => {
            navigate("/login", { replace: true });
          }}
        >
          Already have an account ? LogIn
        </button>
      </form>
    </div>
  );
};
