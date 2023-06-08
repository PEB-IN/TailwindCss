import React from "react";
import { useState } from "react";

const Testing = ({ item }) => {
  const [data, setData] = useState();
  // console.log(item);

  const handleToggleActive = () => {
    let activeNew = item.active === 1 ? 0 : 1;
    setData({ ...data, active: activeNew });
  };

  return (
    <section>
      {item?.active === 1 && (
        <div
          onClick={handleToggleActive}
          className={`w-[280px] p-5 border-[#c9c6c655] rounded-md mb-5 duration-500 group rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800  "is-active bg-white" : ""
        }`}
        >
          <div className="flex items-center">
            <div className="w-full group-[.is-active]:font-bold">
              {item.question}
            </div>
            <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg]">
              <span>&#8250;</span>
            </div>
            <div className="text-xl rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[270deg]"></div>
          </div>
          <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
            My name is Lun Dev
          </div>
        </div>
      )}
    </section>
  );
};

export default Testing;
