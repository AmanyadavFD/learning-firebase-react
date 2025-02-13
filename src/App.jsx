import "./App.css";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";
import SignUpPage from "./pages/SignUpPage";

// const db = getDatabase(app);
// const auth = getAuth(app);

function App() {
  // const putData = () => {
  //   set(ref(db, "users/aman"), {
  //     id: 1,
  //     name: "Aman ",
  //     age: 27,
  //   });
  // };
  // const signUpUsers = () => {
  //   createUserWithEmailAndPassword(auth, "ay@1223gmail.com", "user123")
  //     .then((userCredential) => {
  //       console.log(userCredential.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <SignUpPage />
      {/* <button onClick={signUpUsers}>Create Data</button> */}
    </>
  );
}

export default App;
