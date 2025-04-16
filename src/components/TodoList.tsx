import { useState } from "react";
import SearchBar from "./SearchBar";
import TodoContainer from "./TodoContainer";

export interface Todo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      id: "1",
      title: "ok",
      description: "test",
      isDone: false,
    },
    {
      id: "2",
      title: "ok",
      description: "test",
      isDone: false,
    },
    {
      id: "3",
      title: "ok",
      description: "test",
      isDone: false,
    },
  ]);
  const handleDeleteTodo = (id: string) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="shadow max-w-[400px] w-1/2 h-1/2 p-5">
      <h1 className="text-xl font-bold">TODO LIST</h1>
      <SearchBar />
      <TodoContainer todoList={todoList} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default TodoList;
