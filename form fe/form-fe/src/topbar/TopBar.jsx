import React from "react";
import { Link } from "react-router-dom";
export default function TopBar() {
  const { role, isFilled, firstName, id, loginStatus } = sessionStorage;
  return (
    <div className="topBar" style={cardStyle.topBar}>
      <div className="topLeft" style={cardStyle.topLeft}></div>
      <div className="topCenter" style={cardStyle.topCenter}>
        Form
      </div>
      <div className="topRight" style={cardStyle.topRight}>
        {loginStatus && "Welcome"} {firstName}
      </div>
    </div>
  );
}

const cardStyle = {
  topBar: {
    width: "100%",
    height: "55px",
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    display: "flex",
    alignItems: "center",
    fontFamily: "Josefin Sans",
    justifyContent: "center",
  },
  topLeft: { flex: 3 },
  topRight: { flex: 3, display: "flex", justifyContent: "center" },
  topCenter: {
    fontSize: 25,
    flex: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
