import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form, Input } from "semantic-ui-react";

const SERVICE_ID = "default_service";
const TEMPLATE_ID = "template_t99kx74";
const USER_ID = "HxQYdJPEFHwbYug3c";

const Newsletter = () => {
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
    <div className="relative isolate overflow-hidden py-16 sm:py-10 lg:py-16">
      <div className="mx-auto">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              COMING SOON
            </h2>
            <p className="mt-4 text-lg leading-8 text-white">
              REGISTER FOR THE WEBINAR
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <Form onSubmit={handleOnSubmit}>
                <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  label="Email"
                  name="user_email"
                  placeholder="email"
                  required
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Name"
                  name="user_name"
                  placeholder="name"
                  required
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                >
                  REGISTER
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
