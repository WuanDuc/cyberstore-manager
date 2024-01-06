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
import { HiSearch } from "react-icons/hi";
import { THEME } from "@/constant/theme";
import { Eye, File } from "react-feather";

const importBill = [
  {
    importBillId: "PN001",
    staffId: "NV002",
    importDate: "2023-10-23",
    totalPrice: 100000000,
  },
];

import ProductGridTab from "@/components/listProductCard";
import ProductGridTab5Col from "@/components/listProductCard";
import ProductGridTab4Col from "@/components/listProductCard4Col";

const sampleProduct = {
  name: "Sample Product",
  src: "https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

const FilterContainer = () => (
  <div className="h-2/3 w-100 bg-gray-300 p-4 ml-4 mr-4 text-center">
    <h1 className="text-black font-bold">Filters</h1>
    <button className="rounded-full bg-opacity-0 bg-gray-300 border border-gray-500  pt-2 pb-2 pl-4 pr-4 mt-4 ">
      Xóa filter
    </button>

    <h2 className="text-black font-bold mt-4 mb-2">Danh mục</h2>
    <ul className="list-none p-0 m-0">
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
      <li className="flex items-center mb-2">
        <input type="radio" className="form-radio text-blue-500" />
        <div className="ml-4">Laptop</div>
        <div className="mx-4">15</div>
      </li>
    </ul>

    <h2 className="text-black font-bold mt-4 mb-2">Giá</h2>
    <div className="flex justify-between">
      <div className="flex-col">
        <div>$0 -$1,000</div>
        <div>$1,000 -$2,000</div>
        <div>$2,000 -$3,000</div>
        <div>$3,000 -$4,000</div>
        <div>$4,000 -$5,000</div>
        <div>$5,000 -$6,000</div>
        <div>$6,000 -$7,000</div>
        <div>$7,000 And Above</div>
      </div>
      <div className="flex-col">
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
        <div>19</div>
      </div>
    </div>

    <h2 className="text-black font-bold mt-4 mb-2">Loại</h2>
    <div className="flex">
      <div className="bg-green-500 rounded p-2 mr-2"></div>
      <div className="mx-2">Mới</div>
    </div>
    <div className="flex">
      <div className="bg-yellow-500 rounded p-2 mr-2 mt-2"></div>
      <div className="mx-2">Cũ</div>
    </div>

    <h2 className="text-black font-bold mt-4 mb-2">Màu</h2>
    <div className="flex">
      <div className="bg-red-500 rounded p-2 mr-2"></div>
      <div className="bg-yellow-500 rounded p-2 mr-2"></div>
      <div className="bg-gray-500 rounded p-2 mr-2"></div>
    </div>

    <button className="text-white bg-blue-500 rounded-full pt-2 pb-2 pl-4 pr-4 mt-8">
      Áp dụng filters
    </button>
  </div>
);

const RightContainer = () => (
  <div className="flex-col item-center justify-center">
    <div className="h-1/4 w-100 bg-gray-300 p-4 ml-4 mr-4 ">
      <h1 className="text-xl text-black font-bold mb-6 text-center">Hãng</h1>

          <div className="mb-1">
            <h2 className="text-black">MSI</h2>
          </div>
          <div className="mb-1">
            <h2 className="text-black">Asus</h2>
          </div>
          <div className="mb-1">
            <h2 className="text-black">Lenovo</h2>
          </div>
          <div className="mb-1">
            <h2 className="text-black">Macbook</h2>
          </div>
          
          <div className="mb-1">
            <h2 className="text-black">HP</h2>
      </div>
      
      <button className="text-white bg-blue-500 rounded-full pt-2 pb-2 pl-6 pr-6 mt-4 mr-8 ml-8">Thêm hãng</button>
    </div>

    <button className="text-white bg-blue-500 rounded-full pt-2 pb-2 pl-6 pr-6 mt-8 mr-8 ml-8 mx-auto">Thêm loại sản phẩm</button>
  </div>

  
);

const ContainerLeft = () => (
  <div className=" w-2/4  p-4 ml-6 mr-6  overflow-y-auto">
    <h1 className="text-xl text-black font-bold mb-2">Thông tin về sản phẩm</h1>
      <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Tên loại sản phẩm</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Hãng</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã loại sản phẩm</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Thời gian bảo hành</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
      <h2 className="text-lg text-black font-semibold mb-1 mt-4">Số lượng</h2>
      <input type="text" className="w-full h-10 border border-gray-300 rounded px-3" />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">Loại sản phẩm</h2>
    <div className="flex">
      <h2 className="text-lg text-black mb-1 mt-4">Máy tính</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Laptop</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">PC</h2>
    </div>
    <div className="flex">
      <h2 className="text-lg text-black mb-1 mt-4">Linh kiện</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Màn hình</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Ổ cứng</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Chip</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Tản nhiệt</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Mainboard</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">RAM</h2>
    </div>
    <div className="flex">
      <h2 className="text-lg text-black mb-1 mt-4">Phụ kiện</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Chuột</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Bàn phím</h2>
      <input type="radio" className="form-radio text-blue-500" />
      <h2 className="text-lg text-black mb-1 mt-4">Ghế gaming</h2>
    </div>
   
  </div>
);

const ContainerRight = () => (
  <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 ">
    

      {/* Container chứa thông tin bên phải */}
      <div className="flex flex-col mt-5  items-center justify-center">
          <h2 className="text-xl text-black font-bold mb-2 text-center">Hình ảnh</h2>
      <img src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png" alt="Product Image" className="w-40 h-40 rounded mr-4" />
    </div>
  </div>
);


export default function ProductManagement() {
  return (
    <main className="flex max-h-screen flex-col fill-white">
      {/* <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm "> */}
      <div className="flex-col fixed top-0 w-screen">
        <div className="flex-col">
          <div className=" flex-row pt-8">
            <label className=" font-semibold text-2xl text-black p-7 pt-24">
              Quản lý sản phẩm
            </label>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={THEME.tabTheme}
            >
            
              <Tabs.Item active title="Quản lý kho">
              <div style={{ height: 50 }}>
                  <div
                    className="flex fixed right-5 pl-96"
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                        width: 300,
                      }}
                      id="storageProductSearch"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                </div>
              <div className="flex overflow-y-auto">
                    <FilterContainer />
                    <ProductGridTab5Col></ProductGridTab5Col>
                  </div>
                  <div className="flex justify-around">
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                  </div>
              </Tabs.Item>

              <Tabs.Item active title="CẬP NHẬT SẢN PHẨM">
              <div className="flex">
                    <ContainerLeft />
                    <ContainerRight />
                  </div>
              </Tabs.Item>

              <Tabs.Item title="Sản phẩm bán">
                <div className="flex flex-col h-screen overflow-y-auto">
                  <div className="flex">
                    <FilterContainer />
                    <ProductGridTab4Col></ProductGridTab4Col>
                    <RightContainer />
                  </div>
                  <div className="flex justify-around">
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                    <div className="bg-red-500 rounded p-2 mr-2"></div>
                  </div>
                </div>
              </Tabs.Item>
 
      
        
              <Tabs.Item title="Quản lý phiếu nhập">
                <div style={{ height: 50 }}>
                  <div
                    className=" flex fixed right-40 pl-96 "
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                      }}
                      id="email4"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                  <div className=" flex fixed right-1 pr-1">
                    <Button
                      style={{
                        borderRadius: 20,
                        backgroundColor: "#0156FF",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                      onClick={() => alert("hihi")}
                    >
                      <File style={{ marginRight: 3 }} />
                      Thêm phiếu nhập
                    </Button>
                  </div>
                </div>
                <div
                  style={{
                    width: 1200,
                    alignSelf: "center",
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  <Table hoverable theme={THEME.tableTheme}>
                    <Table.Head>
                      <Table.HeadCell>STT</Table.HeadCell>
                      <Table.HeadCell>Mã phiếu nhập</Table.HeadCell>
                      <Table.HeadCell>Mã nhân viên</Table.HeadCell>
                      <Table.HeadCell>Ngày nhập</Table.HeadCell>
                      <Table.HeadCell>Thành tiền</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {importBill.map((importBill, index) => {
                      return (
                        <Table.Body className="divide-y bg-teal-200">
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-teal-200"
                            onClick={() => alert(index)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1 text-center">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell>{importBill.importBillId}</Table.Cell>
                            <Table.Cell>{importBill.staffId}</Table.Cell>
                            <Table.Cell>{importBill.importDate}</Table.Cell>
                            <Table.Cell>{importBill.totalPrice}</Table.Cell>
                            <Table.Cell className="w-28">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() => alert(bill.saleBilId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                              </div>
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      );
                    })}
                  </Table>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
