import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../config";
import "react-toastify/dist/ReactToastify.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const body = {
        email,
        password,
      };

      // url to make signin api call
      const url = `${URL}/user/signin`;

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data;
        if (result["status"] == "success") {
          toast.success("Welcome to the application");

          // get the data sent by server
          const { role, ff, firstName, id, email } = result["data"];

          // persist the logged in user's information for future use
          sessionStorage["id"] = id;
          sessionStorage["firstName"] = firstName;
          sessionStorage["role"] = role;
          sessionStorage["ff"] = ff;
          sessionStorage["loginStatus"] = true;
          sessionStorage["email"] = email;

          // navigate to home component
          navigate("/home");
        } else {
          toast.error("Invalid user name or password");
        }
      });
    }
  };

  return (
    <div style={cardStyle.container}>
      <h1 className="title">Signin</h1>
      <div style={cardStyle.landing}>
        <div style={cardStyle.lsidetext}></div>
        <div style={cardStyle.txt}>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
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
              <button onClick={signinUser} className="btn btn-primary">
                Signin
              </button>
              <div>
                No account yet? <Link to="/user/signup">Signup here</Link>
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
