import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { auth } from "../config/FireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleForm(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User Successfully Register", {
          style: { top: "3.5em" },
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          style: { top: "3.5em" },
        });
      });
  }

  return (
    <MDBContainer className="p-3  flex justify-center items-center fixed h-screen">
      <MDBCol md="5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid"
          alt="Phone image"
        />
      </MDBCol>

      <form onSubmit={handleForm}>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput id="form3Example1" label="First name" />
          </MDBCol>
          <MDBCol>
            <MDBInput id="form3Example2" label="Last name" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          type="email"
          id="form3Example3"
          label="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form3Example4"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <MDBBtn type="submit" className="mb-4" block>
          Sign in
        </MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <div className="mt-3">
            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating color="secondary" className="mx-1">
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </div>
      </form>
    </MDBContainer>
  );
}

export default App;
