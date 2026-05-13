import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(null);
  //Validate email
  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailValid(isValid);
    return isValid;
  };
  // Validate PAssword
  const validatePassword = (value) => {
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
    setPasswordValid(isValid);
    return isValid;
  };

  //Submitting form
  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailOk = validateEmail(email);
    const isPasswordOk = validatePassword(password);

    if (!isEmailOk || !isPasswordOk) {
      toast.error("Please fix the errors before submitting!");
    } else {
      toast.success("Login succcessful!");
    }
  };

  return (
    <div className="app">
      <form className="loginForm" onSubmit={handleSubmit}>
        {/* Header  */}
        <div className="formHeader">
          <h1>Login</h1>
          <p>Welcome to Login Page</p>
        </div>

        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="e.g. berdullayev@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
          />

          {emailValid === false && email.trim() !== "" && (
            <span className="error">The email format is not valid</span>
          )}
        </div>

        <div className="inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
          {passwordValid === false && password.trim() !== "" && (
            <span className="error">
              Your passwords must be at least 8 characters long and include both
              letters and numbers
            </span>
          )}
        </div>

        <button>
          Login
          <FaSignInAlt />
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
