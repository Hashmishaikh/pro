import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const regs = () => {
    navigate("/register");
  };
  return (
    <div className="container-fluide">
      <div className="d-flex">
        <div className="container col pt-4">
          <div className="container-fluid" style={{ marginLeft: "100px" }}>
            <div
              className="f-account-container-l row"
              style={{ textAlign: "start" }}
            >
              <div className="col-12">
                <img alt="login" src="/images/YTBPRo.svg" width="178" />
                <br />
                <h5 className="d-header-welcome-username">Login</h5>
              </div>
              <div className="f-margin-bottom-25 col-12">
                <p className="enter-color">
                  Enter your registered email and password
                </p>
              </div>
              <div className="col">
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label"
                      style={{ float: "left" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                      style={{ float: "left" }}
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div className="f-account-form-button-2">
                    <button
                      type="submit"
                      style={{ color: "#fff" }}
                      className="colors"
                    >
                      Login
                    </button>
                  </div>
                  <p style={{marginTop:"20px"}} className="f-paragraph-small-2">
                    Dont have an account?{" "}
                    <span style={{cursor:"pointer"}} onClick={regs} className="f-account-link-2">
                      Register
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col" style={{ height: "100vh" }}>
          <div className="f-account-image-wrapper-2">
            <div className="div-block-26">
              <div style={{textAlign:"start"}}>
                <p className="paragraph-10">
                  Welcome!!
                  <br />
                </p>
                <h1 className="heading-13">
                  YTubeBooster <span className="text-span-8">PRO</span>
                </h1>
                <p className="paragraph-9">www.ytubebooster.app</p>
                <div className="text-block-18">Tags</div>
                <div className="text-block-18">Videos</div>
                <div className="text-block-18">Channel Analytics</div>
                <div className="text-block-18">Views</div>
                <div className="text-block-18">Subscribers</div>
                <div className="text-block-18">and more...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
