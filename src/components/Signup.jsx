import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { auth } from "../config/FireBaseConfig";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  function handleForm(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("User Successfully Registered", {
          position: "top-right",
          style: { top: "3.5em" },
        });
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-right",
          style: { top: "3.5em" },
        });
      });
  }

  return (
    <MDBContainer className="p-3 flex justify-center items-center fixed h-screen">
      <MDBCol md="5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid"
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
          Sign up
        </MDBBtn>

        <div className="text-center">
          <p>
            Already a member? <a href="#!">Login</a>
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

export default Signup;
