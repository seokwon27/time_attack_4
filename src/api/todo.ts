import axios from "axios";
import exp from "constants";

export const getTodo = async () => {
  const res = await axios.get("http://localhost:4000/todos");
  const data = res.data;
  // console.log(data);
  return data;
};

export const addTodo = async (newTodo) => {
  const res = await axios.post("http://localhost:4000/todos", {
    ...newTodo,
    isDone: false,
  });
};

export const handleTodo = async (todo) => {
  const res = await axios.patch(`http://localhost:4000/todos/${todo.id}`, {
    ...todo,
  });
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`http://localhost:4000/todos/${id}`);
};
