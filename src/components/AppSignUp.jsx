import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form, Input } from "semantic-ui-react";

const SERVICE_ID = "default_service";
const TEMPLATE_ID = "template_e9acoz2";
const USER_ID = "HxQYdJPEFHwbYug3c";

const AppSignUp = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log({ t: result.text });
        Swal.fire({
          icon: "success",
          title: "Registered!",
        });
      },
      (error) => {
        console.log({ X: error.text });
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
  };

  return (
    <>
      <p className="mt-4 text-lg leading-8 text-purple font-bold pb-5 ">
        Your personal reproductive health companion
      </p>
      <div>
        <Form onSubmit={handleOnSubmit} className="pr-24">
          <Input
            name="user_email"
            className="form__email"
            action="Submit"
            placeholder="Email"
          />
        </Form>
      </div>
      <h1
        className={`
            text-purple`}
      >
        Notify me when app is launched
      </h1>
    </>
  );
};

export default AppSignUp;
