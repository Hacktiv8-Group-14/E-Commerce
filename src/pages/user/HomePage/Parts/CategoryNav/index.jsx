import { BiCategory } from "react-icons/bi";
import { useState } from "react";

export default function CategoryNav({
  category,
  setCategory,
  categories,
  selects,
  setSelects,
}) {
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mt-2">
        <div className="text-end md:text-start">
          {/* Button for Expanding Category Nav When Small Screen */}
          <button
            className="sm:hidden text-xl mt-2"
            onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
          >
            <BiCategory />
          </button>

          {/* Category Nav for Large Screen */}
          <div className="hidden font-semibold gap-0 md:gap-3 sm:flex text-sm lg:text-lg text-gray-400">
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
            <div className="absolute right bg-white rounded-lg border-2  flex flex-col gap-2 p-2 sm:hidden  text-sm">
              {categories.map((tag, index) => (
                <button
                  key={index}
                  className={`p-1 rounded ${
                    category === tag && "bg-bluedark text-white transition"
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
        <select
          value={selects}
          onChange={(e) => setSelects(e.target.value)}
          className="border px-3 p-2"
        >
          <option value="">Sort by</option>
          <option value="low to high">Sort by: Price - Low to high</option>
          <option value="high to low">Sort by: Price - High to low</option>
        </select>
      </div>
    </>
  );
}
