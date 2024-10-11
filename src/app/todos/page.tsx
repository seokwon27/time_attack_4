"use client";

import { addTodo, getTodo } from "@/api/todo";
import DoneList from "@/components/DoneList";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      const todos = await getTodo();
      setTodos(todos);
    };
    getTodoList();
  }, []);

  // console.log(todos);

  return (
    <div>
      <form>
        <input
          value={title}
          placeholder="제목"
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(title);
          }}
        />
        <input
          value={contents}
          placeholder="내용"
          onChange={(e) => {
            setContents(e.target.value);
            // console.log(contents);
          }}
        />
        <button
          onClick={() => {
            addTodo({ title, contents });
          }}
        >
          추가하기
        </button>
      </form>

      <div>
        투두리스트
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <br />
      <div>
        완료 리스트
        <DoneList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
