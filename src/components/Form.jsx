import React from "react";
import Button from "./Button";
import Input from "./Input";
import PropTypes from "prop-types";
import { useTodoContext } from "../TodoContext";

function Form() {
  const {
    todoinput,
    handleInputChange,
    handleFormSubmit,
    isEditing,
    handleUpdate,
    handleCancel,
    error,
  } = useTodoContext();

  const buttons = isEditing
    ? [
        { title: "Update", onSubmit: handleUpdate },
        { title: "Cancel", onSubmit: handleCancel },
      ]
    : [{ title: "Submit", onSubmit: handleFormSubmit }];

  return (
    <>
      <div className="mb-5 pl-4 overflow-y-hidden mt-20 mr-10 whitespace-nowrap">
        <h1 className="font-serif text-3xl">Todo</h1>
       
        <Input
          width="w-[97%]"
          handleInputChange={handleInputChange}
          input={todoinput}
        />
         <div className="
         h-4 ">{todoinput === "" && error && isEditing ? (
          <h6 className="text-red-600 h-3 pb-2 text-sm/[10px] . ">please Enter todo.......</h6>
        ) : null}</div>
       
        {buttons.map((button) => (
          <Button
            key={button.title}
            title={button.title}
            onSubmit={button.onSubmit}
          />
        ))}
      </div>
    </>
  );
}

Form.propTypes = {
  todoinput: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Form;