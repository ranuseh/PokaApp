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
    <div className="relative isolate overflow-hidden py-16 sm:py-10 lg:py-16">
      <div className="mx-auto flex">
        <div className="mx-auto flex gap-x-8 gap-y-16 lg:max-w-none">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Coming soon
            </h2>
            <p className="mt-4 text-lg leading-8 text-black">
              REGISTER TO BE NOTIFIED
            </p>
            <div>
              <Form onSubmit={handleOnSubmit}>
                <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  name="user_email"
                  placeholder="email"
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

export default AppSignUp;
