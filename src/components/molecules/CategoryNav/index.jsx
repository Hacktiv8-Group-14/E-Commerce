import { BiCategory } from "react-icons/bi";
import { useState } from "react";

export default function CategoryNav({ category, setCategory, categories }) {
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  return (
    <>
      <div className="mt-2 text-end md:text-start">
        {/* Button for Expanding Category Nav When Small Screen */}
        <button
          className="sm:hidden text-xl"
          onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
        >
          <BiCategory />
        </button>

        {/* Category Nav for Large Screen */}
        <div className="hidden sm:flex flex-row gap-8 text-xl">
          {categories.map((tag, index) => (
            <button
              key={index}
              className={`hover:underline rounded p-1 ${
                category === tag && "bg-[#242582] text-white transition"
              }`}
              onClick={() => setCategory(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Category Nav for Small Screen */}
        {isCategoryExpanded && (
          <div className="absolute right-2 bg-white rounded-lg border-2 border-[#F64C72] flex flex-col gap-2 p-2 sm:hidden items-end text-sm">
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
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
