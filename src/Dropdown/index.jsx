import React, { useState } from 'react';

function Dropdown({ onChange}) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
	  onChange(event);
  }

  const options = [
    { value: "bg-gradient-to-r from-purple-500 to-pink-500", label: "Punk" },
    { value: "bg-gradient-to-r from-cyan-500 to-blue-500", label: "Kawai" },
    { value: "bg-gradient-to-r from-violet-500 to-fuchsia-500", label: "Purple" },
  ]

  return (
    <div className="m-1">
      <label htmlFor="options" className="block text-sm font-medium text-gray-700">Options</label>
      <select 
        id="options" 
        name="options" 
        value={selectedOption} 
        onChange={handleSelectChange} 
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {
          options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Dropdown;