import { useState } from "react";

export default function SearchBar({ onChange }) {
  const [term, setTerm] = useState("");
  const [timer, setTimer] = useState("");

  function handleChange(e) {
    setTerm(e.target.value);
  }

  function handleKeyUp(e) {
    clearTimeout(timer);
    setTimer(setTimeout(() => onChange(term), 700));
  }

  return (
    <>
      <input
        type="text"
        className="border border-slate-400 p-3 w-4/5 mt-4 rounded-sm"
        placeholder="Search anything"
        onChange={(e) => handleChange(e)}
        onKeyUp={(e) => handleKeyUp(e)}
        value={term}
      />
    </>
  );
}
