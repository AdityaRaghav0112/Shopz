import React, { useEffect, useState } from "react";
import { getList, removeFromList } from "../utils/localList";

const MyList = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    setList(getList());
  }, []);

  const deleteItem = (id: number) => {
    removeFromList(id);
    setList(getList()); //Refresh the list after deletion
  };

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-semibold mb-4">My Shopping List</h1>

      {list.length === 0 && (
        <p className="text-gray-500">No items added yet.</p>
      )}

      <div className="flex flex-wrap gap-6 ">
        {list.map((product) => (
          <div
            key={product.id}
            className="card w-80 flex flex-col gap-3 bg-white shadow-md p-4 rounded-xl hover:scale-105 duration-300"
          >
            <img
              src={product.image}
              className="w-full h-60 object-cover rounded-lg"
            />

            <h2 className="mt-3 font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>

            <button
              onClick={() => deleteItem(product.id)}
              className="mt-3 bg-red-500 text-white hover:bg-red-600 w-full rounded-xl p-2"
            >
              Remove
            </button>
            <button className="w-full bg-gray-300 p-2 font-semibold rounded-xl hover:bg-gray-400 duration-100">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
