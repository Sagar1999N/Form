import Home from "./home/Home";
import TopBar from "./topbar/TopBar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";

const AuthorizeUser = () => {
  const loginStatus = sessionStorage["loginStatus"];
  return loginStatus == "1" ? <Home /> : <Signin />;
};

const AuthorizeHome = () => {
  const loginStatus = sessionStorage["loginStatus"];
  return loginStatus == "1" ? <Home /> : <Signin />;
};

function App() {
  return (
    <div className="container">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizeUser />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<AuthorizeHome />} />
          {/* <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/edit-blog" element={<EditBlog />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
