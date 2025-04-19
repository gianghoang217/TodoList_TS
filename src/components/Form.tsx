import { ChangeEventHandler, useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState<string>("");
  function handleChange(e: any) {
    setInputValue(e.target.value);
  }
  //  2 ways binding
  return (
    <div>
      form
      <input onChange={handleChange} value={inputValue} />
      <button onClick={() => setInputValue("")}>Clear input</button>
    </div>
  );
}
export default Form;
