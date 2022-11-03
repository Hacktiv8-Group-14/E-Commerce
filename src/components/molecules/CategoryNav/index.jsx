import { BiCategory } from "react-icons/bi";
import { useState } from "react";

export default function CategoryNav({ category, setCategory, categories }) {
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  return (
    <>
      <div className="mt-2 text-end md:text-start">
        {/* Button for Expanding Category Nav When Small Screen */}
        <button
          className="sm:hidden text-xl mt-2"
          onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
        >
          <BiCategory />
        </button>

        {/* Category Nav for Large Screen */}
        <div className="hidden font-semibold sm:flex justify-center gap-8 text-lg text-gray-400">
          {categories.map((tag, index) => (
            <button
              key={index}
              className={`hover:underline rounded p-1  ${
                category === tag && "text-[#242582] font-bold  transition"
              }`}
              onClick={() => setCategory(tag)}
            >
              {tag.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Category Nav for Small Screen */}
        {isCategoryExpanded && (
          <div className="absolute right-2 bg-white rounded-lg border-2  flex flex-col gap-2 p-2 sm:hidden  text-sm">
            {categories.map((tag, index) => (
              <button
                key={index}
                className={`p-1 rounded ${
                  category === tag && "bg-[#242582] text-white transition"
                }`}
                onClick={() => {
                  setCategory(tag);
                  setIsCategoryExpanded(!isCategoryExpanded);
                }}
              >
                {tag.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
