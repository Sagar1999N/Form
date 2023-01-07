import { useEffect, React } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import TopBar from "../topbar/TopBar";
import { URL } from "../config";
const FileDownload = require("js-file-download");

export default function Home() {
  const { role, firstName, id, loginStatus, ff, email } = sessionStorage;
  const navigate = useNavigate();
  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
    sessionStorage.removeItem("loginStatus");
    sessionStorage.removeItem("ff");
    sessionStorage.removeItem("email");
    // navigate to sign in component
    navigate("/user/signin");
  };
  const download = () => {
    const body = {
      id,
    };
    const responseType = "blob";
    //navigate("/user/download");
    const url = `${URL}/download`;
    axios.get(url, responseType).then((response) => {
      // get the server result
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("download successful");
        // navigate to home component
        navigate("/home");
      }
    });
  };
  // const download = () => {
  //   const body = {
  //     id,
  //   };
  //   const responseType = "blob";
  //   //navigate("/user/download");
  //   const url = `${URL}/user/download`;
  //   axios.post(url, body, responseType).then((response) => {
  //     // get the server result
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download"); //or any other extension
  //     document.body.appendChild(link);
  //     link.click();
  //   });
  // };
  const fillForm = () => {
    // navigate to sign in component
    navigate("/user/form");
  };
  // load the data in the beginning
  const buttonLoader = () => {
    if (role == "admin" && loginStatus) {
      return (
        <div>
          <div class="row">
            <div className="mb-3">
              <a href="http://localhost:8080/download">
                <button type="button" class="btn btn-primary">
                  Download
                </button>
              </a>
            </div>
          </div>
          <div className="mb-3">
            <button type="button" class="btn btn-danger" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      if (ff == "true") {
        if (loginStatus) {
          return (
            <div>
              <button type="button" class="btn btn-danger" onClick={logoutUser}>
                Logout
              </button>
            </div>
          );
        } else {
          return (
            <a href="/user/signin">
              <button type="button" class="btn btn-primary">
                Login
              </button>
            </a>
          );
        }
      } else {
        return (
          <div class="row">
            <div className="mb-3">
              <button onClick={fillForm} className="btn btn-primary">
                Fill Form
              </button>
            </div>
            <div className="mb-3">
              <button onClick={logoutUser} className="btn btn-danger">
                Logout
              </button>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div>
      <TopBar />
      <div fluid style={cardStyle.container}>
        <div fluid style={cardStyle.landing}>
          <div fluid className="buttons" style={cardStyle.buttons}>
            {buttonLoader()}
          </div>
          <div fluid classNaem="txt" style={cardStyle.txt}>
            <h5>
              <h2>Lorem ipsum</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
          </div>
          <div className="sidetext" style={cardStyle.rsidetext}></div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  container: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginLeft: "-50",
    marginRight: "-50",
    paddingLeft: "-50",
    paddingRight: "-50",
    display: "flex",
  },
  button: {
    //position: "absolute",
    // top: "50%",
    // right: "50%",
    // display: "flex",
    // alignItems: "center",
    // fontFamily: "Josefin Sans",
    // justifyContent: "center",
  },
  landing: {
    backgroundImage:
      "url(https://images.pexels.com/photos/1036841/pexels-photo-1036841.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    display: "flex",
    paddingLeft: "-50",
    paddingRight: "-50",
    marginLeft: "-50",
    marginRight: "-50",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flex: "7",
    //position: "absolute",
    top: "50%",
    right: "50%",
    //display: "flex",
    alignItems: "center",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
    paddingLeft: "0",
    paddingRight: "0",
  },
  txt: {
    fontSize: "20",
    flex: "4",
    display: "flex",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "0",
    paddingRight: "0",
    marginLeft: "0",
    marginRight: "0",
  },
  rsidetext: {
    flex: "2",
    paddingLeft: "0",
    paddingRight: "0",
  },
};
