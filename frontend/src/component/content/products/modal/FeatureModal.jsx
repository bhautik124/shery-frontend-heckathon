import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const options = ["Best Seller", "A-Z", "Z-A", "Low to High", "High to Low"];

const FeaturedModal = ({ isOpen, onClose, onApply, selectedFilters }) => {
  const [selected, setSelected] = useState(selectedFilters.featured || "");

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleApply = () => {
    onApply(selected); 
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/40">
      <div className="bg-white text-black rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Sort By Featured
        </h2>

        <div className="flex flex-col space-y-3 mb-6">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="featured"
                value={option}
                checked={selected === option}
                onChange={() => handleSelect(option)}
                className="cursor-pointer"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleApply}
          disabled={!selected}
          className={`w-full py-3 text-white rounded-md transition-all duration-300 ${
            !selected
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FeaturedModal;
