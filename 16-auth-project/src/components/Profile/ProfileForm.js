import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { API_KEY } from "../Auth/AuthForm";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPasswordInputRef.current.value,
        returnSecureToken: true,
      }),
    });

    const res = await req.json();

    if (!req.ok) {
      alert(res.error.message);
      return;
    }

    history.replace("/");
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          min={6}
          id="new-password"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
