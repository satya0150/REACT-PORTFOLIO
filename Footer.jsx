import React from "react";


function Footer() {
    var currYear = new Date().getFullYear();
    return (
      <div>
        <footer>
            <p>Made by Satyam Choudhary|| @ {currYear}</p>
        </footer>
        
      </div>
    );
  }

export default Footer;