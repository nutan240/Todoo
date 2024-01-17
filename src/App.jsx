import React, { useState ,useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from './TodoContext';

function App() {
  const [todoinput, setTodoInput] = useState('');
  const [error, seterror] = useState(false)
  const [tododata, setTododata] = useState(() => {
    const storedData = localStorage.getItem('tododata');
    return storedData ? JSON.parse(storedData) : [];
  });
  const [sortedtodo, setSortedtodo] = useState('all');
  const [edit, setEdit] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null);

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

  const handleFormSubmit = (e) => {
    if (edit) {
      handleUpdate();
    } else {
      handleAddTodo();
    }
  };

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit();
    }
  };

  const handleAddTodo = () => {
    if (todoinput.trim() !== '') {
      const newTodo = {
        name: todoinput,
        id: uuidv4(),
        check: false,
      };
      setTododata([...tododata, newTodo]);
      setTodoInput('');
    }
  };

  const handleUpdate = () => {
    if (todoinput.trim() !== '' && editingTodoId !== null) {
      setTododata((prevData) =>
        prevData.map((todo) =>
          todo.id === editingTodoId ? { ...todo, name: todoinput } : todo
        )
        
      );
      setEdit(false);
      setEditingTodoId(null);
      setTodoInput('');
    } 
    else{
      seterror(true)
      setEdit(true)
    }

  };

  const handleDelete = (id) => {
    setTododata((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    setTodoInput("");
  };

  const handleCheckboxChange = (id) => {
    setTododata((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  const handleEdit = (id) => {
    const editTodo = tododata.find((e) => e.id === id);

    if (editTodo) {
      setTodoInput(editTodo.name);
      setEdit(true);
      setEditingTodoId(id);
    }
  };

  const handleCancel = () => {
    setEdit(false);
    setEditingTodoId(null);
    setTodoInput('');
  };

  const handleFilterButton = (filteredData) => {
    setSortedtodo(filteredData);
  };

  const filteredData = () => {
    switch (sortedtodo) {
      case 'completed':
        return tododata.filter((todo) => todo.check);
      case 'incompleted':
        return tododata.filter((todo) => !todo.check);
      case 'all':
      default:
        return tododata;
    }
  }
  
  useEffect(() => {
    localStorage.setItem('tododata', JSON.stringify(tododata));
  }, [tododata]);

  const contextValue = {
    todoinput,
    setTodoInput,
    tododata,
    setTododata,
    sortedtodo,
    setSortedtodo,
    edit,
    badge: "completed",
    setEdit,
    editingTodoId,
    setEditingTodoId,
    handleInputChange,
    handleFormSubmit,
    isEditing: edit,
    handleUpdate,
    handleCancel,
    filteredData: filteredData(),
    handleDelete,
    handleCheckboxChange,
    handleFilterButton,
    handleEdit,
    handleInputKeyDown,
    buttonData,
    error,seterror,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      <div className='w-[60%] max-lg:[100%] max-sm:w-[100%] overflow-y-hidden m-auto pb-10'>
        <Form />
        <List />
      </div>
    </TodoContext.Provider>
  );
}

App.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  todoinput: PropTypes.string.isRequired,
  setTodoInput: PropTypes.func.isRequired,
};

export default App;
