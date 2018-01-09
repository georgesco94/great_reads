import React from 'react';

const Footer = (props) => {
  let footerClass = "footer";
  if(props.loginPage) {
    footerClass = "login-footer";
  }
  return (
      <div className={footerClass}>
        <div className="copywright">© GreatReads Inc</div>
        <div className="links">
          <a className="footerlink" href="https://github.com/georgesco94/greatReads">Github</a>
          <a className="footerlink" href="https://www.linkedin.com/in/george-najm-707003149/">Linkedin</a>
          <a className="footerlink" href="https://www.amazon.com/">Amazon</a>
          <a className="footerlink" href="https://www.thriftbooks.com/">Thriftbooks</a>
        </div>
      </div>
  );
};

export default Footer;
