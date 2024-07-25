
import React from 'react';




const Contact = () => {
   
    return (
        <>
        <div className="conatiner-fluid bg-dark bg-image text-white" >
          <section id="contact" data-aos="zoom-in-left"  data-aos-duration="2000">
            <h4 className="fst-italic fw-bold fs-4 text-center pt-3 heading">
              Contact me
            </h4>
            <div className="contact-form-div d-flex justify-content-center p-3 ">
            
        <form  className='border p-5 rounded shadow'>
        <p>
          Feel free to reach out to me through any of the following methods:
        </p>
         
          <div>
          <ul>
            <li className="contact-item">
              <strong>Email:</strong>{" "}
              <a href="mailto: ntshyamsunder96@gmail.com">
                ntshyamsunder96@gmail.com{" "}
              </a>
            </li>
            <li className="contact-item">
              <strong>Phone:</strong> +91-86677-66078
            </li>
            </ul>
          </div>
          
          <div className="social-profiles text-center">
            <a
              href="https://www.linkedin.com/in/shyam-sunder-7471752ba/"
              target="_blank"
              
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                style={{ width: "80px", height: "80px" }}
              />
            </a>
            <a href="https://github.com/ShyamSunderNT" target="_blank"   >
              <img
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                style={{ width: "50px", height: "50px" }}
              />
            </a>
          </div>
          
          
         
          
          
          
        </form>
        </div>
          </section>
          
          <hr />
          <footer className="footer text-gray fs-6 text-center p-2">
            <span>Copyright@2024 Shyam.All rights reserved.</span>
          </footer>
        </div>
      </>
    );
  };
  

export default Contact;