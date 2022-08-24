import React, { useState } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import { createTodoItem } from "../utils";
import "./app.css";

const App = () => {
  const [todoData, setTodoData] = useState([
    createTodoItem("Drink Coffee"),
    createTodoItem("Make awesome"),
    createTodoItem("Have a lunch"),
  ]);
  const [term, setTerm] = useState("");
  const [filters, setFilters] = useState("all");

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
    return setTodoData(newArray);
  };

  const addItem = (text) => {
    //generate id
    const newItem = createTodoItem(text);
    //add element to array
    const newArr = [...todoData, newItem];
    return setTodoData(newArr);
  };

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    //update object
    const oldItem = arr[idx];

    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    //create new arr
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  const onToggleDone = (id) => {
    return setTodoData(toggleProperty(todoData, id, "done"));
  };

  const onToggleImportant = (id) => {
    return setTodoData(toggleProperty(todoData, id, "important"));
  };

  const onSearchChange = (term1) => {
    setTerm(term1);
  };

  const onFilterChange = (filter1) => {
    setFilters(filter1);
  };

  const search = (items, term1) => {
    if (term1.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term1.toLowerCase()) > -1;
    });
  };

  const filterItems = (items, filter1) => {
    switch (filter1) {
      case "All":
        return items;
      case "Active":
        return items.filter((item) => !item.done);
      case "Done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const visibleItems = filterItems(search(todoData, term), filters);

  const doneCount = todoData.filter((el) => el.done).length;

  const todoCount = todoData.length - doneCount;

  return (
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter filter={filters} onFilterChange={onFilterChange} />
      </div>
      <TodoList
        todos={visibleItems}
        onDeleted={deleteItem}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
      />

      <ItemAddForm addItem={addItem} />
    </div>
  );
};

export default App;
