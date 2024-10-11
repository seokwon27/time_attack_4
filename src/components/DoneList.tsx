import { deleteTodo } from "@/api/todo";
import React from "react";

const DoneList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => {
        if (todo.isDone === true)
          return (
            <div key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.contents}</div>
              <div>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                <button onClick={() => {}}>취소</button>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default DoneList;
