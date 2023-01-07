import React from "react";

function Contact() {
  const handleClick = () => {
    history.pushState("address");
  };
  return (
    <a href="#address">
      <button className="contact h-40 hidden dark:bg-slate-900 bg-gray-200 fixed right-0 bottom-0 mx-6 my-10 w-40 md:flex items-center justify-center text-lg rounded-full">
        Contact Us
      </button>
    </a>
  );
}

export default Contact;
