import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:maaprovisionstores@gmail.com">
        <Button>Mail: maaprovisionstores@gmail.com</Button>
        <br/>
        <Button>Contact Number: +91 7905633545</Button>
      </a>
    </div>
  );
};

export default Contact;
