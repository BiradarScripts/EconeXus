

import React from "react";

function SignUpInfo({ formData, setFormData }) {
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === formData.password;
  };

  return (
    <div className="sign-up-container">
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        className={!validateEmail(formData.email) ? "invalid" : ""}
      />
      {!validateEmail(formData.email) && (
        <p className="error" style={{"color":"red"}}>Please enter a valid email address</p>
      )}

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        className={!validatePassword(formData.password) ? "invalid" : ""}
      />
      {!validatePassword(formData.password) && (
        <p className="error" style={{"color":"red"}}>Password must be at least 6 characters long</p>
      )}

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
        className={!validateConfirmPassword(formData.confirmPassword) ? "invalid" : ""}
      />
      {!validateConfirmPassword(formData.confirmPassword) && (
        <p className="error" style={{"color":"red"}}>Passwords do not match</p>
      )}
    </div>
  );
}

export default SignUpInfo;
