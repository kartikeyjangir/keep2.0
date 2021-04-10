import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h3>Copyright &#169; {year}</h3>
    </div>
  );
}

export default Footer;
