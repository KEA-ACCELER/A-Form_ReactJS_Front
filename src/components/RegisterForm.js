import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css";

export default function RegisterForm() {
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userGender, setUserGender] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const idChange = (e) => {
    setUserId(e.target.value);
  }
  const emailChange = (e) => {
    setUserEmail(e.target.value);
  }
  const passwordChange = (e) => {
    setUserPassword(e.target.value);
  }
  const genderChange = (e) => {
    setUserGender(e.target.value);
  }
  const phoneChange = (e) => {
    setUserPhone(e.target.value);
  }
  const addressChange = (e) => {
    setUserAddress(e.target.value);
  }

  useEffect(() => {
  }, [])

  const confirm = (e) => {
    console.log({
      userId,
      userEmail,
      userPassword,
      userGender,
      userPhone,
      userAddress
    })
    axios
      .post("http://127.0.0.1:8080/app/user", {
        userId,
        userEmail,
        userPassword,
        userGender,
        userPhone,
        userAddress
      })
    .then((res) => {
      alert("Register Success");
      window.location.replace("/");
    })
    .catch((err) => {
        if (err.response.status === 400) {
          alert("Invalid User Inputs");
        }
        else if (err.response.status === 409){
          alert(err.response.data);
        }
        else{
          alert(err);
        }
      }
    );
  }

  const login = (e) => {
    window.location.replace("/login");
  }

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <div className="sharpic">
          </div>
          <br></br>
          <div className="form-group mt-3">
            <label>ID</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={idChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              onChange={emailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              onChange={passwordChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Gender</label>
            <Form.Select onChange={genderChange}>
              <option>Select</option>
              <option value={true}>MALE</option>
              <option value={false}>FEMALE</option>
            </Form.Select>
          </div>
          <div className="form-group mt-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={phoneChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control mt-1"
              onChange={addressChange}
            />
          </div>
          <br></br>
          <br></br>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={login} style={{cursor: "pointer"}}>
              Sign In
            </span>
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button variant="dark" onClick={confirm} className="btn btn-primary">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}
