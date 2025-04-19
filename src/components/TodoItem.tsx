import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

interface TodoItemProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  onDelete: () => void;
  onUpdateTodo: (id: string, title: string, description: string) => void;
}
function TodoItem({ id, title, description, isDone, onDelete, onUpdateTodo }: TodoItemProps) {
  const [open, setIsOpen] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const handleSave = () => {
    setTitleError("");
    setDescriptionError("");
    if (!titleInput.trim()) {
      return setTitleError("Title is required!");
    }
    if (!descriptionInput.trim()) {
      return setDescriptionError("Description is required!");
    }

    if (!(titleError && descriptionError)) {
      onUpdateTodo(id, titleInput, descriptionInput);
      setIsOpen(false);
    }
  };
  return (
    <>
      <div
        id={`todoItem_${id}`}
        className="flex items-center gap-3 border-b-1 border-gray-200 py-3"
      >
        <input checked={isDone} type="checkbox" name="" id="" />
        <p>{title}</p>
        <p onClick={() => setIsOpen(true)} className="text-xs text-gray-400">
          {description}
        </p>
        <button
          className="w-[20px] h-[20px] text-xs rounded-xl bg-red-400 hover:bg-red-300 text-white flex justify-center items-center ml-auto"
          onClick={onDelete}
        >
          x
        </button>
      </div>
      {/*Edit Todo Model*/}
      {open && (
        <div className="bg-black/50 flex justify-center items-center w-screen h-screen fixed top-0 left-0">
          <div className="w-5/10 bg-white rounded flex flex-col p-5">
            <h3 className="text-xl mb-5">Edit Todo</h3>
            <input
              type="text"
              placeholder="Title"
              className="outline-none w-full mb-5 border-b-2 border-emerald-200"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            {titleError && <p className="text-red-500">{titleError}</p>}
            {/*title*/}
            <input
              type="text"
              placeholder="Description"
              className="outline-none w-full mb-5 border-b-2 border-emerald-200"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
            {descriptionError && <p className="text-red-500">{descriptionError}</p>}
            {/*description*/}
            <div className="flex gap-2 justify-end w-full mt-auto">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded bg-red-500 text-white "
              >
                Cancel
              </button>
              <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItem;
