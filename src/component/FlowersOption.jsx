import React, { useState } from "react";
import { Data } from "../../data";
import { Tabs, Tab, FormControl, NativeSelect } from "@mui/material";
import { nanoid } from "nanoid";
import { CardMain } from "./card-main";
import img from "../assets/images/super-sale.png";

const FlowersOption = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("all plants");
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container w-full bg-white">
      <div className="flex ">
        <div className="w-1/4 mr-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-8">
              <p className="text-lg font-bold mb-4">Categories</p>
              <ul className="space-y-4">
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span className="text-green-600 font-semibold">
                    House Plants
                  </span>
                  <span>(33)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Potter Plants</span>
                  <span>(12)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Seeds</span>
                  <span>(65)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Small Plants</span>
                  <span>(39)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Big Plants</span>
                  <span>(23)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Succulents</span>
                  <span>(17)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Terrariums</span>
                  <span>(19)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Gardening</span>
                  <span>(13)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Accessories</span>
                  <span>(18)</span>
                </li>
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <p className="text-lg font-bold mb-4 hover:text-[#46A358]">
                Price Range
              </p>
              <div className="flex flex-col space-y-4">
                <p>
                  Price:{" "}
                  <span className="text-green-600 hover:text-[#46A358]">
                    $39 - $1230
                  </span>
                </p>
                <button className="bg-green-600 text-white py-2 rounded-md hover:text-[#46A358]">
                  Filter
                </button>
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="text-lg font-bold mb-4 hover:text-[#46A358]">
                Size
              </p>
              <ul className="space-y-4">
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Small</span>
                  <span>(119)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Medium</span>
                  <span>(86)</span>
                </li>
                <li className="flex justify-between cursor-pointer hover:text-[#46A358]">
                  <span>Large</span>
                  <span>(78)</span>
                </li>
              </ul>
            </div>
            <img src={img} alt="" className="mt-4" />
          </div>
        </div>

        {/* Main content */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-6 ml-[-286px] hover:text-[#46A358]">
            <Tabs
              value={value}
              onChange={handleChangeTab}
              textColor="inherit"
              indicatorColor="primary"
              aria-label="primary tabs example"
              className="text-xl mx-auto text-primary"
            >
              <Tab
                key={nanoid()}
                value="all plants"
                label="All Plants"
                className="text-xl text-secondary"
              />
              <Tab
                className="text-xl text-secondary"
                key={nanoid()}
                value="new arrivals"
                label="New Arrivals"
              />
              <Tab
                className="text-xl text-secondary"
                key={nanoid()}
                value="sale"
                label="Sale"
              />
            </Tabs>
            <div className="flex items-center gap-4">
              <span className="text-[18px]">Short by:</span>
              <FormControl>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "sort",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Default sorting</option>
                  <option value={20}>Price: Low to High</option>
                  <option value={30}>Price: High to Low</option>
                  <option value={40}>Newest Arrivals</option>
                </NativeSelect>
              </FormControl>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {currentItems.map((item) => (
              <CardMain key={item.id} {...item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "bg-white text-secondary"
                } rounded-md`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowersOption;
