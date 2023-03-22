import React from 'react'

const Register = () => {
  return (
    <div className="container-fluide">
      <div className="d-flex">
      <div className="col-5" style={{ height: "100vh" }}>
          <div className="f-account-image-wrapper">
            <div className="div-block-25">
                
              <div style={{textAlign:"start"}}>
              <p class="paragraph-10">The ultimate <span class="text-span-6">YouTube</span> SEO platform that will help you grow your channel and increase your views and <span class="text-span-7">subscribers. </span>Our platform is designed to help you optimize your videos and channel for YouTube search engines, so you can rank higher and get more visibility. <br /></p>
                
              </div>
              <div>
          <p class="paragraph-9">With YTubeBooster, you can easily track your rankings, analyze your competitors, and get actionable insights to improve your performance. Whether you’re a beginner or an experienced YouTuber, YTubeBooster has everything you need to succeed. Sign up today and start boosting your YouTube presence!</p>
          <h1 class="heading-12">YTubeBooster <span class="text-span-8">PRO</span></h1>
          <p class="paragraph-9">www.ytubebooster.app</p>
        </div>
            </div>
          </div>
        </div>
        <div className="container col pt-4">
          <div className="container-fluid">
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
                      htmlFor="exampleInput1"
                      className="form-label"
                      style={{ float: "left" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput1"
                      aria-describedby="emailHelp"
                    />
                  </div>
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
<div className="mb-3">
                  <label id="Privacy-Checkbox-01" class="w-checkbox f-checkbox-field">
                <div class="w-checkbox-input w-checkbox-input--inputType-custom f-checkbox"></div><input type="checkbox" id="Privacy-Checkbox-01" name="Privacy-Checkbox-01" data-name="Privacy Checkbox 01" required="" style={{opacity:"0",position:"absolute",zIndex:"-1"}} /><span class="f-checkbox-label w-form-label" for="Privacy-Checkbox-01">I agree to the <span class="text-span-5">Terms and Privacy Policy</span></span>
              </label>
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
                    <span style={{cursor:"pointer"}} className="f-account-link-2">
                      Register
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Register