import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FireBaseConfig";
import { toast } from "react-toastify";

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleForm(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User Successfully Login", {
          style: { top: "3.5em" },
        });
        navigate('/')
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
    <MDBContainer
      fluid
      className="p-3 my-5 h-custom flex justify-center items-center fixed"
    >
      <MDBRow>
        <MDBCol md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol md="6" className="">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Log in with</p>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-2">
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <form onSubmit={handleForm}>
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

            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn type="submit" className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a
                  onClick={() => navigate("/signup")}
                  className="link-danger cursor-pointer"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
