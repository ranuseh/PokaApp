import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form, Input } from "semantic-ui-react";

const SERVICE_ID = "default_service";
const TEMPLATE_ID = "template_t99kx74";
const USER_ID = "HxQYdJPEFHwbYug3c";

const WebinarSignUp = () => {
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
        <div className="mx-auto flex flex-col lg:flex-row">
          <div className="max-w-xl lg:max-w-lg lg:mr-8">
            <p className="text-xl text-white w-80">
              Join us for a free self care webinar
            </p>
            <div className="mt-4 flex max-w-md ">
              <Form onSubmit={handleOnSubmit}>
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  name="user_name"
                  placeholder="NAME"
                  required
                  className="w-80"
                />
                <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  name="user_email"
                  placeholder="EMAIL"
                  required
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-pink w-80 h-12 px-3.5 py-2.5 text-sm font-semibold text-purple shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                >
                  Register here
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSignUp;
