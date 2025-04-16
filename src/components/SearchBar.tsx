function SearchBar() {
  return (
    <div className="my-2 pb-2 px-2 border-b-2 border-emerald-500 flex gap-2 justify-center w-9/10 m-auto">
      <input type="text" className="w-100 outline-none" placeholder="Add a task" />
      <button className="px-3 py-2 rounded bg-teal-500 text-white ">Add</button>
    </div>
  );
}

export default SearchBar;
