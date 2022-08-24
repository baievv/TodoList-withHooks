let maxId = 100;

const createTodoItem = (label) => {
  return {
    label,
    important: false,
    done: false,
    id: maxId++,
  };
};

export { createTodoItem };
