import React from "react";
import InputField from "./InputField";


const Form = ({ handleSubmit, handleChange }) => {
  
  return (
    <div>
      <form className="uk-width-1-1" onSubmit={handleSubmit}>
        <InputField
          name="product"
          value={""}
          placeholder="product name"
          handleChange={handleChange}
        />
      
        <button type="submit" className="uk-button uk-button-primary">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default Form;