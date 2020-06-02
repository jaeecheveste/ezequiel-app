import React from "react";
import { useForm } from "react-hook-form";
import "./FormComponent.scss";

const FormComponent = ({ onSubmitCallback }: any) => {
  const { register, handleSubmit, errors } = useForm();
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit = (data: any) => {
    onSubmitCallback(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Enter your email</label>
      <input
        name="email"
        ref={register({ pattern: EMAIL_REGEX, required: "Email is Required" })}
      />
      <div className="form-error-msg">
        {errors.email && "Email format is invalid."}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FormComponent;
