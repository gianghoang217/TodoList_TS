interface TodoItemProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  onDelete: () => void;
}
function TodoItem({ id, title, description, isDone, onDelete }: TodoItemProps) {
  return (
    <div id={`todoItem_${id}`} className="flex items-center gap-3 border-b-1 border-gray-200 py-3">
      <input checked={isDone} type="checkbox" name="" id="" />
      <p>{title}</p>
      <p className="text-xs text-gray-400">{description}</p>
      <button
        className="w-[20px] h-[20px] text-xs rounded-xl bg-red-400 hover:bg-red-300 text-white flex justify-center items-center ml-auto"
        onClick={onDelete}
      >
        x
      </button>
    </div>
  );
}

export default TodoItem;
