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

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now.toString(),
      title: title,
      description: "Click here to edit",
      isDone: false,
    };
    const newTodoList: Todo[] = [newTodo, ...todoList];
    setTodoList(newTodoList);
  };

  const handleUpdate = (id: string, title: string, description: string) => {
    const newArray = [...todoList];
    const currentItemIndex = newArray.findIndex((todo) => todo.id === id);
    newArray[currentItemIndex] = {
      ...newArray[currentItemIndex],
      title,
      description,
    };

    setTodoList(newArray);
    console.log(id, title, description);
  };

  return (
    <div className="shadow max-w-[400px] w-1/2 h-1/2 p-5">
      <h1 className="text-xl font-bold">TODO LIST</h1>
      <SearchBar handleAddTodo={handleAddTodo} />
      <TodoContainer
        todoList={todoList}
        onDeleteTodo={handleDeleteTodo}
        onUpdateTodo={handleUpdate}
      />
    </div>
  );
}

export default TodoList;
