import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const createUser = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Your account was created successfully!");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="signpPage">
      <div>
        <label>Email:</label> <br />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter Your Email Address"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
        />
      </div>
      <button onClick={createUser}>
        {loading ? "Signing Up..." : "Sign Up"}
      </button>
    </div>
  );
};

export default SignUpPage;
