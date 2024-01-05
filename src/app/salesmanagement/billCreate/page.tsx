"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Table,
  Tabs,
  TextInput,
} from "flowbite-react";
import { Console } from "console";
import { ProductCard } from "@/components/productCard";
import SearchInput from "@/components/searchinput";
import { THEME } from "@/constant/theme";
import { HiSearch } from "react-icons/hi";
import { Eye, File, Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { SHARE_FUNCTIONS } from "@/constant/function";

export default function CreateBills() {
  const [salesProducts, setSaleProducts] = useState([
    {
      name: "Sample Product 1",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 2",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 3",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 4",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 5",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 6",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 7",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 8",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand 9",
      sale: 10,
    },
    {
      name: "Sample Product 10",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 11",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 12",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 13",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 14",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand",
      sale: 10,
    },
    {
      name: "Sample Product 15",
      src: "/sample.jpg",
      price: 19.99,
      brand: "Sample Brand 16",
      sale: 10,
    },
  ]);
  const [recentProductList, setRecentProductList] = useState(salesProducts);
  const [productsInBill, setProductsInBill] = useState([]);
  const [searchName, setSearchName] = useState("");

  const handleSearchName = (search) => {
    const normalizeText = (text) => text.toLowerCase();
    const searchProduct = salesProducts.filter((saleProduct, index) => {
      return (
        normalizeText(saleProduct.name).includes(normalizeText(search)) ||
        search == ""
      );
    });
    console.log(searchProduct);
    setRecentProductList(searchProduct);
  };

  const handleChange = (e) => {
    // setSearchName(e.target.value);
    handleSearchName(e.target.value);
  };

  const handleAddProductToBill = (product) => {
    let temp = productsInBill;
    temp.push(product);
    setProductsInBill(temp);
  };

  return (
    <div className="flex flex-row h-screen">
      {/* <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-row fixed top-0 w-screen"> */}
      <div className="basis-5/12 overflow-y-scroll pt-5">
        <label className=" font-semibold text-2xl text-black pl-4 pt-24">
          Lập hóa đơn
        </label>
        <div className="h-12 w-full pl-4 mt-3 pr-4">
          <TextInput
            className="w-full"
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              color: "black",
              width: "100%",
            }}
            onChange={handleChange}
            id="name"
            name="name"
            type="Search"
            rightIcon={HiSearch}
            placeholder="Search"
            required
          />
        </div>
        {recentProductList.map((saleProduct, index) => {
          if (index % 2 == 0 && recentProductList[index] !== undefined) {
            return (
              <div key={index} className="flex flex-row mt-4">
                <div className="w-4"></div>
                <ProductCard
                  product={saleProduct}
                  title={"Thêm sản phẩm"}
                  onClick={() => alert("click")}
                  index={index}
                ></ProductCard>
                {recentProductList[index + 1] !== undefined ? (
                  <div className="ml-4">
                    <ProductCard
                      product={recentProductList[index + 1]}
                      title={"Thêm sản phẩm"}
                      onClick={() => alert("click")}
                      index={index}
                    ></ProductCard>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          }
        })}
      </div>
      <div className="basis-4/12 bg-green-200 pt-5">
        <label className=" font-semibold text-2xl text-black pl-4 pt-24">
          Sản phẩm đã chọn
        </label>
      </div>
      <div className="basis-4/12 bg-gray-200"></div>
      {/* </div>
        </div> */}
    </div>
  );
}
