import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '@fortawesome/fontawesome-free/css/all.css';
import AWS from 'aws-sdk'
AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
  sessionToken: process.env.REACT_APP_AWS_SESSION_TOKEN
});
function Footer(){
    return(
       
      <div className="container my-5">
  <footer className="text-center text-lg-start bg-dark py-3">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
              <i className="fab fa-youtube"></i>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
              <i className="fab fa-instagram"></i>
            </button>
            <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: "#54456b" }}>
              <i className="fab fa-twitter"></i>
            </button>
          </div>
  
          <div className="text-center text-white">
            &copy; 2023 Freddy BV. All Rights Reserved.
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    
    );

};

export default Footer;