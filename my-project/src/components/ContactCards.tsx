import "../App.css";
import React from "react";

interface Props  {
  contactImage: string;
  contactsLink: string;
}

function ContactCards({ contactImage, contactsLink}: Props) {
  return (
        <a className="text-white p-4 flex flex-col justify-between hover:bg-medBlue hover:rounded-full" href={contactsLink} target="_blank" rel="noopener noreferrer">
          <img src={contactImage} alt="test" className="max-h-20"/>
          <span className="invisible" ></span>
        </a>
  );
}

export default ContactCards;