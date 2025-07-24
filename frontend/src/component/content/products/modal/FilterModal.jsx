import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const categories = [
  "shortSleeve",
  "longSleeve",
  "tankTop",
  "hoodie",
  "crewneck",
  "sweats",
  "shorts",
  "album",
];

const FilterModal = ({ isOpen, onClose, onApply, selectedFilters }) => {
  const [price, setPrice] = useState([999, 4000]);
  const [selected, setSelected] = useState(selectedFilters.categories || []);

  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const isDisabled =
    selected.length === 0 && price[0] === 999 && price[1] === 4000;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/40">
      <div className="bg-white text-black rounded-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Filter Products
        </h2>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Price Range: ₹{price[0]} - ₹{price[1]}
          </label>
          <input
            type="range"
            min="999"
            max="4000"
            value={price[1]}
            onChange={(e) => setPrice([999, Number(e.target.value)])}
            className="w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Categories</label>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-2 capitalize"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          disabled={isDisabled}
          onClick={() => {
            onApply({ price, categories: selected });
          }}
          className={`w-full py-3 text-white rounded-md transition-all duration-300 ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          Show Results
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
