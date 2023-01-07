import Home from "./home/Home";
import TopBar from "./topbar/TopBar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import Form from "./form/Form";
const AuthorizeUser = () => {
  const loginStatus = sessionStorage["loginStatus"];
  return loginStatus ? <Home /> : <Signin />;
};

const AuthorizeHome = () => {
  const loginStatus = sessionStorage["loginStatus"];
  return loginStatus ? <Home /> : <Signin />;
};

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizeUser />} />
          <Route path="/user/signin" element={<Signin />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/home" element={<AuthorizeHome />} />
          <Route path="/user/form" element={<Form />} />
          {/*<Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/edit-blog" element={<EditBlog />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
