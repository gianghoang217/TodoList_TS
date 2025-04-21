import { FC } from "react";
import { Todo } from "./TodoList";

interface StatisticsProps {
  todoList: Todo[];
  showIncompleteOnly: boolean;
  toggleShowIncomplete: () => void;
}

const Statistics: FC<StatisticsProps> = ({
  todoList,
  showIncompleteOnly,
  toggleShowIncomplete,
}) => {
  const completedTasks = todoList.filter((todo) => todo.isDone).length;
  const totalTasks = todoList.length;

  return (
    <div className="mt-4 mb-2 p-3 bg-gray-50 rounded-md border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={toggleShowIncomplete}
          className={`px-2 py-1 text-xs rounded ${
            showIncompleteOnly
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {showIncompleteOnly ? "Show All" : "Show Incomplete"}
        </button>
        <h3 className="text-sm font-medium text-gray-700">
          {completedTasks}/{totalTasks} tasks completed
        </h3>
      </div>
    </div>
  );
};

export default Statistics;
