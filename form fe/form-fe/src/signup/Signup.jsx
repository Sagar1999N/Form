import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { URL } from "../config";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  // used to navigate from one component to another
  const navigate = useNavigate();

  const signupUser = () => {
    if (firstName.length == 0) {
      toast.warning("Please enter first name");
    } else if (lastName.length == 0) {
      toast.warning("Please enter last name");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    } else if (password.length == 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length == 0) {
      toast.warning("Please confirm your password");
    } else if (password != confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
        role,
      };

      // url to call the api
      const url = `${URL}/user/signup`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully signed up new user");

          // navigate to the signin page
          navigate("/user/signin");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div style={cardStyle.container}>
      <h1 className="title">Signup</h1>
      <div style={cardStyle.landing}>
        <div style={cardStyle.lsidetext}></div>
        <div style={cardStyle.txt}>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <button onClick={signupUser} className="btn btn-primary">
                Signup
              </button>
              <div>
                Already have an account?{" "}
                <Link to="/user/signin">Signin here.</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={cardStyle.rsidetext}></div>
      </div>
    </div>
  );
}

const cardStyle = {
  container: {
    //backgroundColor: "orange",
    fontSize: "40",
    width: "100%",
    height: "100%",
    textAlign: "center",
    //display: "flex",
    alignItems: "center",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
    //width: "100%",
    //height: "100%",
    margin: "0px",
    padding: "0px",
  },
  button: {
    fontSize: "40",
    position: "absolute",
    top: "50%",
    right: "50%",
    display: "flex",
    alignItems: "center",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
    //backgroundColor: "green",
  },
  landing: {
    fontSize: "40",
    //backgroundImage:
    //"url(https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg)",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    //display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lsidetext: {
    //flex: "2",
    //backgroundColor: "green",
  },
  txt: {
    padding: "20px",
    fontSize: "40",
    //flex: "4",
    display: "flex",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "blue",
  },
  rsidetext: {
    //flex: "2",
    //backgroundColor: "yellow",
  },
};
