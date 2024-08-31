import React, { useEffect } from "react";

import Typewriter from "typewriter-effect";
const Home = () => {
  <>
    <div
      id="home"
      className="container-fluid bg-dark bg-image mt-5  pt-4 section-bg"
    >
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center"
          data-aos="zoom-out-left"
          data-aos-duration="2000"
        >
          <div
            className="home-text m-5 p-5 fs-3 text-white"
            data-aos="zoom-out-left"
            data-aos-duration="2000"
          >
            <h3>Hi,</h3>
            <p>
              <p>
                I'm{" "}
                <span className="name text-orange">
                  <Typewriter
                    words={["Vidhya"]}
                    loop={2}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
              An enthusiastic{" "}
              <span className="role text-orange">
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "Fullstack Developer",
                    "Web Developer",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </p>
            

            <a
              className="btn text-orange border"
              href="https://drive.google.com/file/d/10BGv055V917QJI9x83Jm9ktA9_GzC9-1/view?usp=drive_link"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="home-img mt-5 pt-5 ms-4 ps-4">
            <img
              src="https://llllline.com/images/thumbs/woma/woman-girl-with-laptop-vector-0000079698-800.webp"
              alt="MyImage"
              className="myImage"
              data-aos="flip-right"
              data-aos-duration="3000"
            ></img>
          </div>
        </div>
      </div>
    </div>
  </>;

  return (
    <>
      <div
        id="home"
        className="container-fluid bg-dark bg-image mt-5  pt-4 section-bg"
      >
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center"
            data-aos="zoom-out-left"
            data-aos-duration="2000"
          >
            <div
              className="home-text m-5 p-5 fs-3 text-white"
              data-aos="zoom-out-left"
              data-aos-duration="2000"
            >
              <h3>Hi,</h3>
              <p>
                <p>
                  I'm{" "}
                  <span className="name text-orange">
                    <Typewriter
                      options={{
                        strings: ["Shyamsunder"],
                        autoStart: true,
                        loop: true,
                        cursor: "|",
                      }}
                    />
                  </span>
                </p>
                An enthusiastic{" "}
                <span className="role text-orange">
                  <Typewriter
                    options={{
                      strings: [
                        "MERN Stack Developer",
                        "Fullstack Developer",
                        "Web Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      cursor: "|",
                    }}
                  />
                </span>
              </p>
              <p style={{ color: 'rgb(231, 212, 205)' }}>
              
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </p>

              <a
                className="btn text-orange border"
                href="https://drive.google.com/file/d/10BGv055V917QJI9x83Jm9ktA9_GzC9-1/view?usp=drive_link"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="home-img mt-5 pt-5 ms-4 ps-4">
              <img
                src="https://assets-global.website-files.com/62eafc974911b32d446e1a98/65146fa9115e1a3954ec7563_studying.png"
                alt="MyImage"
                className="myImage"
                data-aos="flip-right"
                data-aos-duration="3000"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
