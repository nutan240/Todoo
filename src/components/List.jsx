import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Input from "./Input";
import Icon from "./Icon";
import Badge from "./Badge";
import { useTodoContext } from "../TodoContext";

function List() {
  const {
    tododata,
    filteredData,
    handleDelete,
    handleCheckboxChange,
    handleEdit,
    handleFilterButton,
    sortedtodo,
    edit,
    editingTodoId
  } = useTodoContext();

  const buttonData = [
    {
      title: "All",
      type: "all",
      color: sortedtodo === "all" ? "bg-gray-400" : "bg-white",
    },
    {
      title: "Complete",
      type: "completed",
      color: sortedtodo === "completed" ? "bg-green-300" : "bg-white-500",
    },
    {
      title: "Incomplete",
      type: "incompleted",
      color: sortedtodo === "incompleted" ? "bg-blue-200" : "bg-white",
    },
  ];

  return (
    <>
      <div>
        {tododata.length > 0 && (
          <div className="ml-5 mt-7 mb-0 mr-10 text-balance break-words">
            <h1 className="font-medium text-2xl font-serif mb-1">Todo List</h1>
            <div className="flex gap-4 mb-4">
              {buttonData.map((button) => (
                <Button
                  key={button.title}
                  title={button.title}
                  onSubmit={() => handleFilterButton(button.type)}
                  color={button.color}
                />
              ))}
            </div>
            <div className="h-[300px] overflow-y-scroll">
              {filteredData.map((todo) => (
                <div
                  className={`border ${
                    edit && todo.id === editingTodoId
                      ? "border-blue-300"
                      : "border-slate-300"
                  }  rounded-md pl-2 pr-4 py-1 text-balance break-words mb-2 mt-1  flex`}
                  key={todo.id}
                >
                  <div className="icons flex w-full justify-between">
                    <Input
                      type="checkbox"
                      checked={todo.check}
                      handleInputChange={() => handleCheckboxChange(todo.id)}
                    />

                    <div className="text-balance flex justify-between overflow-scroll text-left truncate break-words size-full">
                      <p className="break-all rounded-md pt-1 pl-4 flex justify-center">
                        {todo.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <Icon
                          type="delete"
                          handleClick={() => handleDelete(todo.id)}
                          color="text-red-500"
                        />
                        <Icon
                          type="edit"
                          color="text-blue-500"
                          handleClick={() => {
                            handleEdit(todo.id);
                          }}
                        />
                        {todo.check && <Badge badge="completed" />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

List.propTypes = {
  tododata: PropTypes.array.isRequired,
  filteredData: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleFilterButton: PropTypes.func.isRequired,
  sortedtodo: PropTypes.string.isRequired,
};

export default List;
