import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useHistory } from "react-router";
import { URL } from "../config";

export default function Form() {
  const { role, firstName, id, loginStatus, ff, email } = sessionStorage;
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [countries, setCountries] = useState("");
  const [states, setStates] = useState("");
  const [countryid, setCountryid] = useState("");
  // used to navigate from one component to another
  const navigate = useNavigate();
  const split_string;
  const fillForm = () => {
    if (phone.length == 0) {
      toast.warning("Please enter phone");
    } else if (birthDate.length == 0) {
      toast.warning("Please enter birth date");
    } else if (addressLine1.length == 0) {
      toast.warning("Please enter address line 1");
    } else if (addressLine2.length == 0) {
      toast.warning("Please enter address line 2");
    } else if (city.length == 0) {
      toast.warning("Please enter city");
    } else if (state.length == 0) {
      toast.warning("Please enter state");
    } else if (country.length == 0) {
      toast.warning("Please enter country");
    } else if (postalCode.length == 0) {
      toast.warning("Please enter postal code");
    } else if (gender.length == 0) {
      toast.warning("Please enter gender");
    } else {
      const body = {
        id,
        phone,
        birthDate,
        gender,
        country,
        state,
        city,
        postalCode,
        addressLine1,
        addressLine2,
        profileImage,
      };

      // url to call the api
      const url = `${URL}/user/form`;
      console.log(body);
      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          //toast.success("Successfully signed up new user");
          sessionStorage.ff = "true";
          // navigate to the signin page
          navigate("/home");
        } else {
          //toast.error(result["error"]);
        }
      });
    }
  };
  const back = () => {
    navigate("/home");
    // history.go(0);
  };
  // make a call to the search api to get the results
  // const loadCountries = () => {
  //   const url = `${URL}/countries`;
  //   axios.get(url).then((response) => {
  //     const result = response.data;
  //     if (result["status"] == "success") {
  //       setCountries(result["data"]);
  //       console.log(result);
  //     } else {
  //       toast.error(result["error"]);
  //     }
  //   });
  // };
  useEffect(() => {
    const getcountry = async () => {
      const req = await fetch("http://localhost:8080/countries").catch(
        console.error
      );
      const getres = await req.json();
      console.log(getres.data);
      split_string = getres.data.split(",");
      console.log(split_string);
      setCountries(await split_string);
    };
    getcountry();
  }, []);
  const handlecountry = (event) => {
    const getcoutryid = event.target.value;
    setCountryid(getcoutryid);
    event.preventDefault();
  };
  // const loadCountries = async () => {
  //   const res = await fetch("http://localhost:8080/countries");
  //   const getcon = await res.json();
  //   console.log(getcon);
  //   setCountries(await getcon);
  // };
  // var cId;
  // //var [cId, setCId] = useState("");
  // const loadStates = () => {
  //   const url = `${URL}/states/${cId}`;
  //   axios.get(url).then((response) => {
  //     const result = response.data;
  //     if (result["status"] == "success") {
  //       setStates(result["data"]);
  //       console.log(result);
  //     } else {
  //       toast.error(result["error"]);
  //     }
  //   });
  // };

  //load the data in the beginning
  // useEffect(() => {
  //   loadCountries();
  //   console.log("getting called");
  // }, []);
  // const options = {
  //   method: "GET",
  // };

  // fetch("http://localhost:8080/countries", options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));
  // const history = useHistory();
  return (
    <div style={cardStyle.container}>
      <h1 className="title">Form</h1>
      <div style={cardStyle.landing}>
        <div style={cardStyle.lsidetext}></div>
        <div style={cardStyle.txt}>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Phone
              </label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Birth Date
              </label>
              <input
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
                type="date"
                class="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Gender
              </label>
              <select name="plan" id="plan" className="form-control">
                <option value="none" selected disabled hidden>
                  Select an Option
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                onChange=
                {(e) => {
                  setGender(e.target.value);
                }}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Country
              </label>
              {/* <select
                onChange={(e) => {
                  setCountry(e.target.value);
                  //setCId(e.target.cId);
                  // cId = country.cId;
                  // loadStates();
                }}
                name="country"
                id="country"
                className="form-control"
              >
                <option value="none" selected disabled hidden>
                  --Select Country--
                </option>
                {countries.map((countr) => {
                  return <option>{countr.cName}</option>;
                })}
                ;
              </select> */}
              <select
                name="country"
                className="form-control"
                onChange={(e) => handlecountry(e)}
              >
                <option>--Select Country--</option>
                {split_string.map((getcon) => (
                  <option value={getcon.country_id}>
                    {getcon.country_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                State
              </label>
              <input
                onChange={(e) => {
                  setState(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                City
              </label>
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Postal Code
              </label>
              <input
                onChange={(e) => {
                  setPostalCode(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Address Line 1
              </label>
              <input
                onChange={(e) => {
                  setAddressLine1(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Address Line 2
              </label>
              <input
                onChange={(e) => {
                  setAddressLine2(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <button onClick={fillForm} className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="mb-3">
              <button onClick={back} className="btn btn-danger">
                Back
              </button>
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
