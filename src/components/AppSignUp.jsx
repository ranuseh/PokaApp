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
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Registered!",
        });
      },
      (error) => {
        console.log(error.text);
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
      <p className="mt-4 text-lg leading-8 text-purple-950">
        Your personal reproductive health companion
      </p>
      <div>
        <Form onSubmit={handleOnSubmit} className="pr-24">
          <Input action="Submit" placeholder="Email" />
          {/* <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  name="user_email"
                  placeholder="Please enter your email address"
                  required
                /> */}
        </Form>
      </div>

      <h1
        className={`
            text-purple-950`}
      >
        Notify me when app is launched
      </h1>
    </>
  );
};

export default AppSignUp;
