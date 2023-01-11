import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div
      className="flex flex-col h-screen justify-center mb-10 mx-auto max-w-5xl w-11/12 mx-auto py-20"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/3f30615c-de5f-454e-9583-a6ec7d5833aa"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Let's Chat!</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 pl-0 bg-transparent border-t-0 border-b-2 focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 pl-0 bg-transparent border-t-0 border-b-2 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="mb-4 p-2 pl-0 bg-transparent border-t-0 border-b-2 focus:outline-none"
          ></textarea>
          <button className="mt-2 transition ease-in-out text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-700 to-blue-700 drop-shadow-md hover:scale-105 hover:-translate-y-1 duration:300 hover:shadow-md hover:from-red-500 hover:to-red-400">
            Contact Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
