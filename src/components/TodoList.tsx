import { deleteTodo, getTodo } from "@/api/todo";
import React from "react";

const TodoList = ({ todos, setTodos }) => {
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => {
        if (todo.isDone === false)
          return (
            <div key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.contents}</div>
              <div>
                <button
                  onClick={() => {
                    deleteTodo(id);
                    setTodos((prev) => {
                      return prev.filter((el) => el.id !== todo.id);
                    });
                  }}
                >
                  삭제
                </button>
                <button onClick={() => {}}>완료</button>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default TodoList;
