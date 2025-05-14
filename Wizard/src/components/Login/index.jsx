import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const [allValues, setValues] = useState({
    username: "",
    password: "",
    showMsg: false,
    errorMsg: "",
  });

  const token = Cookies.get("jwt_token");
  const navigate = useNavigate();

  const afterClickLogin = async (e) => {
    e.preventDefault();

    const api = "https://apis.ccbp.in/login";

    // setting body for fetching data
    const userId = {
      username: allValues.username,
      password: allValues.password,
    };

    const options = {
      method: "Post",
      body: JSON.stringify(userId),
    };

    const response = await fetch(api, options);
    const fetchData = await response.json();
    // console.log(fetchData);

    if (response.ok === true) {
      // if getting response then saving jwt_token and hiding error msg
      setValues({ ...allValues, showMsg: false, errorMsg: "" });
      Cookies.set("jwt_token", fetchData.jwt_token);
      navigate("/");
    } else {
      // if not getting response then showing error msg
      setValues({ ...allValues, showMsg: true, errorMsg: fetchData.error_msg });
    }
  };

  const onEnterUserInput = (e) => {
    setValues({ ...allValues, username: e.target.value });
  };

  const onEnterPassword = (e) => {
    setValues({ ...allValues, password: e.target.value });
  };

  useEffect(() => {
    if (token !== undefined) {
      navigate("/");
    }
  }, []);

  return (
    <div className="login-main-cont">
      <h1 className="text-primary"> 𝓦𝓲𝔃𝓪𝓻𝓭 </h1>
      <form
        onSubmit={afterClickLogin}
        className="form-control w-25 form-layout"
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            onChange={onEnterUserInput}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="rahul"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={onEnterPassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="rahul@2021"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        {allValues.showMsg ? (
          <p className="text-danger">*{allValues.errorMsg}</p>
        ) : null}
      </form>
    </div>
  );
};

export default Login;
