import TodoItem from "./TodoItem";
import { Todo } from "./TodoList";

interface TodoContainerProps {
  todoList: Todo[];
  onDeleteTodo: (id: string) => void;
}
function TodoContainer({ todoList, onDeleteTodo }: TodoContainerProps) {
  // conditional rendering
  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onDelete={() => onDeleteTodo(todo.id)} />;
        })
      ) : (
        <h3 className="text-lg text-center mt-10">Nothing todo, use input to add more task!!!</h3>
      )}
    </div>
  );
}

export default TodoContainer;
