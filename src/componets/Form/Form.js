import React from "react";
import './Form.css';
import InputForm from "./InputForm/InputForm";
import OutForm from "./OutForm/OutForm";

const Form = () => {
  return (
    <div className="in">
      <InputForm />
      <OutForm />
    </div>
  );
};

export default Form;
