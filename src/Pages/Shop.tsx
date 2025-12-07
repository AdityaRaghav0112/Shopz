import React, { useState } from "react";
import p1 from "../assets/products/iphone-16.jpg";
import { getList, addToList } from "../utils/localList";

const Shop = () => {
  const Products = [
    {
      id: 1,
      name: "iphone 16 pro",
      category: "Electronics",
      price: 1000,
      brand: "Apple",
      image: p1,
    },
    {
      id: 2,
      name: "Galaxy S23",
      category: "Electronics",
      price: 900,
      brand: "Samsung",
      image: "/products/galaxy.jpg",
    },
    {
      id: 3,
      name: "Nike Air Max",
      category: "Clothing",
      price: 150,
      brand: "Nike",
      image: "/products/nike.jpg",
    },
    {
      id: 4,
      name: "Adidas Ultraboost",
      category: "Clothing",
      price: 180,
      brand: "Adidas",
      image: "/products/adidas.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState(500);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const categories = ["Electronics", "Clothing", "Groceries", "Books"];
  const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony"];

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setPrice(500);
    setSelectedBrands([]);
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-3">
      {/* SIDEBAR */}
      <div className="col-span-1 w-full">
        <div className="sidebar bg-white shadow-md rounded-lg p-4 space-y-6 border">
          {/* CATEGORY FILTER */}
          <div>
            <h2 className="font-semibold mb-2 text-lg">Category</h2>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* PRICE FILTER */}
          <div>
            <h2 className="font-semibold mb-2 text-lg">Price Range</h2>
            <input
              type="range"
              min={0}
              max={5000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-sm mt-1 text-gray-600">Up to ₹{price}</p>
          </div>

          {/* BRANDS FILTER */}
          <div>
            <h2 className="font-semibold mb-2 text-lg">Brands</h2>
            <ul className="space-y-1">
              {brands.map((brand) => (
                <li key={brand}>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <span>{brand}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full">
              Apply Filters
            </button>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 w-full"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="col-span-3 w-full">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h1 className="text-xl font-semibold mb-4">Products</h1>

          <div className="products flex flex-wrap gap-6">
            {Products.map((product) => {
              const isAdded = getList().some((p: any) => p.id === product.id);

              return (
                <div
                  key={product.id}
                  className="card h-96 w-80 bg-white rounded-xl shadow-md p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-lg"
                  />

                  <h2 className="mt-3 font-semibold text-lg">{product.name}</h2>
                  <p className="text-gray-600">₹{product.price}</p>

                  <button
                    disabled={isAdded}
                    onClick={() => {
                      addToList(product);
                      window.location.reload(); // refresh UI
                    }}
                    className={`my-3 w-full p-2 rounded-xl font-semibold transition ${
                      isAdded
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : "bg-blue-400 text-white hover:border hover:border-blue-400 hover:bg-white hover:text-blue-400"
                    }`}
                  >
                    {isAdded ? "Added ✓" : "Add to Shopping List"}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-500">
            <p>Selected Category: {selectedCategory || "None"}</p>
            <p>Max Price: ₹{price}</p>
            <p>Brands: {selectedBrands.join(", ") || "None"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
