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
            text-purple pt-2`}
      >
        For African women by African women B E T A Launch -- coming soon
      </h1>
    </>
  );
};

export default AppSignUp;
