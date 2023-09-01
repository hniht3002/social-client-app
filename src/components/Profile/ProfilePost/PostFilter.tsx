import React, { useState } from "react";
const PostFilter = () => {
  let [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  );

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYearValue = parseInt(event.target.value);
    setSelectedYear(selectedYear=selectedYearValue);
    console.log(selectedYear);
    
  };

  const yearOptions = Array.from(
    { length: 2023 - 2010 + 1 },
    (_, index) => 2010 + index
  );
  return (
    <div>
      <button className="bg-gray-200 p-4 rounded-xl">Filter Post</button>
      <div className="text-center w-1/2">
        <h1 className="font-bold text-xl">Filter Post</h1>
        <p className="mt-6">Post filter help find post easily</p>
        <div className="">
          <div className="flex mt-8">
            <p className="font-semibold mt-2">Date : </p>
            <select onChange={handleYearChange} className="ml-8 bg-gray-200 p-2 rounded-xl">
              <option value="">Select a year</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFilter;
