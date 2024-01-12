import React from 'react';
import Form from './components/Form';
import List from './components/List';
import PropTypes from 'prop-types';
import { useTodoContext } from './TodoContext'; 

function App() {
  const {
    todoinput,
    setTodoInput,
    sortedtodo,
    edit,
    editingTodoId,
    handleUpdateTodo,
    handleDelete,
    handleCheckboxChange,
    handleEdit,
    handleCancelEdit,
    handleFilterButton,
    filteredData,
    handleInputChange,
    handleFormSubmit
  } = useTodoContext();

  return (
    <div className='w-[60%] max-lg:[100%] max-sm:w-[100%] overflow-y-hidden m-auto pb-10'>
      <Form
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        input={todoinput}
        setTodoInput={setTodoInput}
        isEditing={edit}
        handleUpdate={handleUpdateTodo}
        handleCancel={handleCancelEdit}
      />
      <List
        tododata={filteredData()}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        handleEdit={handleEdit}
        handleFilterButton={handleFilterButton}
        sortedtodo={sortedtodo}
        edit={edit}
        editingTodoId={editingTodoId}
      />
    </div>
  );
}

App.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  todoinput: PropTypes.string.isRequired,
  setTodoInput: PropTypes.func.isRequired,
};

export default App;
