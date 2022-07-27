import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { role, isFilled, firstName, id } = sessionStorage;
  //const navigate = useNavigate();
  // const logoutUser = () => {
  //   // remove the logged users details from session storage
  //   sessionStorage.removeItem("id");
  //   sessionStorage.removeItem("firstName");
  //   sessionStorage.removeItem("lastName");
  //   sessionStorage.removeItem("loginStatus");
  //   // navigate to sign in component
  //   // navigate("/user/signin");
  //   //    location.href="/user/signin"
  // };
  // const buttonLoader = () => {
  //   if (sessionStorage.role == "admin")
  //     return (
  //       <button type="button" class="btn btn-primary">
  //         Download
  //       </button>
  //     );
  //   else if (!isFilled)
  //     return (
  //       <button type="button" class="btn btn-primary">
  //         Fill Form
  //       </button>
  //     );
  // };
  return (
    <div style={cardStyle.container}>
      <div style={cardStyle.landing}>
        <div className="buttons" style={cardStyle.buttons}>
          {/* {buttonLoader()};
          <button type="button" class="btn btn-danger" onClick={logoutUser}>
            Logout
          </button>
          <button className="btn btn-danger">
            <useNavigate to="/user/signup" className="link">
              SignUp
            </useNavigate>
          </button> */}
        </div>
        <div classNaem="txt" style={cardStyle.txt}>
          <h5>
            <h2>Lorem ipsum</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h5>
        </div>
        <div className="sidetext" style={cardStyle.rsidetext}></div>
      </div>
    </div>
  );
}

const cardStyle = {
  container: {
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    top: "50%",
    right: "50%",
    display: "flex",
    alignItems: "center",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
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
  },
  buttons: {
    flex: "7",
  },
  txt: {
    fontSize: "20",
    flex: "4",
    display: "flex",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
    alignItems: "center",
  },
  rsidetext: {
    flex: "2",
  },
};
