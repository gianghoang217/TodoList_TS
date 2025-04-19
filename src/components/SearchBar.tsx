import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

function SearchBar({ handleAddTodo }: { handleAddTodo: (title: string) => void }) {
  // 2 ways binding
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(""); // error message
  // handleAddTodo("ABC")
  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    // [ ] Todo: focus back to input when submit
    e.preventDefault();
    if (!inputValue.trim()) {
      // falsy value
      return setError("Invalid task title!");
    }
    handleAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form
        onSubmit={handleAdd}
        className="my-2 pb-2 px- border-b-2 border-emerald-500 flex gap-2 justify-center w-9/10 m-auto"
      >
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
            setError("");
          }}
          value={inputValue}
          type="text"
          className="w-100 outline-none"
          placeholder="Add a task"
        />
        <PrimaryButton>Add</PrimaryButton>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

export default SearchBar;
