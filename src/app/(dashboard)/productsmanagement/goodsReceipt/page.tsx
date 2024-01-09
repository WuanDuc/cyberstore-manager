"use client";
import Image from "next/image";
import {
  Button,
  CustomFlowbiteTheme,
  Tabs,
  Table,
  TextInput,
} from "flowbite-react";
import { Console } from "console";
import { SaleProductCard } from "@/components/saleProductCard";
import SearchInput from "@/components/searchinput";
import {
  Circle,
  Edit,
  Eye,
  FileText,
  Gift,
  Monitor,
  PlusCircle,
  Trash2,
  X,
} from "react-feather";
import { HiSearch } from "react-icons/hi";
import { THEME } from "@/constant/theme";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const GoodReceipt = ({ action, goodReceipt }) => {
  const [importedProducts, setImportedProducts] = useState([
    {
      importedBillId: "PN001",
      productId: "SP001",
      supplierName: "Asus",
      importedPrice: 200000,
      amount: 20,
    },
    {
      importedBillId: "PN001",
      productId: "SP001",
      supplierName: "Asus",
      importedPrice: 200000,
      amount: 20,
    },
    {
      importedBillId: "PN001",
      productId: "SP001",
      supplierName: "Asus",
      importedPrice: 200000,
      amount: 20,
    },
    {
      importedBillId: "PN001",
      productId: "SP001",
      supplierName: "Asus",
      importedPrice: 200000,
      amount: 20,
    },
  ]);

  action = "add";

  const router = useRouter();

  return (
    <div className="flex max-h-screen flex-col fill-white overflow-scroll">
      <div className="z-10 fill-white max-w-5xl w-full text-sm">
        <div className="flex-col top-0 w-screen h-px-500">
          <div className="flex-col">
            <div className="flex-row pt-8">
              {action == "add" ? (
                <label className=" font-bold text-2xl text-black p-7 pt-24">
                  {"Quản lý phiếu nhập > Thêm phiếu nhập"}
                </label>
              ) : (
                <label className=" font-bold text-2xl text-black p-7 pt-24">
                  {"Quản lý phiếu nhập > Xem chi tiết"}
                </label>
              )}
            </div>
            <div className="h-300 w-9/12 p-4 ml-6 mr-6 text-black">
              <h1 className="text-xl text-black font-bold mb-2">
                Thông tin phiếu nhập
              </h1>
              <div className="w-2/5 h-0.5 bg-gray-300 mb-8"></div>
              <h2 className="text-base text-black font-semibold mb-1 mt-4">
                Mã phiếu nhập
              </h2>
              <input
                type="text"
                className="w-2/5 h-10 border border-gray-300 rounded px-3 mb-8"
              />
              <h1 className="text-xl text-black font-bold mb-2">
                Sản phẩm nhập
              </h1>
              <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
              <div className="flex flex-row">
                <div className="flex flex-col w-2/5">
                  <h2 className="text-base text-black font-semibold mb-1 mt-4">
                    Tên sản phẩm <span className="text-red-700">*</span>
                  </h2>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      className="w-full h-10 border border-gray-300 rounded px-3"
                    />
                    <Button
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: "#0156FF",
                      }}
                      onClick={() =>
                        router.push("/productsmanagement/updateProduct")
                      }
                    >
                      <PlusCircle />
                    </Button>
                  </div>
                  <h2 className="text-base text-black font-semibold mb-1 mt-4">
                    Số lượng <span className="text-red-700">*</span>
                  </h2>
                  <input
                    type="text"
                    className="w-full h-10 border border-gray-300 rounded px-3"
                  />
                </div>
                <div className="w-1/5"></div>
                <div className="flex flex-col w-2/5">
                  <h2 className="text-base text-black font-semibold mb-1 mt-4">
                    Tên nhà cung cấp
                  </h2>
                  <input
                    type="text"
                    className="w-full h-10 border border-gray-300 rounded px-3"
                  />
                  <h2 className="text-base text-black font-semibold mb-1 mt-4">
                    Đơn giá <span className="text-red-700">*</span>
                  </h2>
                  <input
                    type="text"
                    className="w-full h-10 border border-gray-300 rounded px-3"
                  />
                </div>
              </div>
              <h1 className="text-xl text-black font-bold mb-1 mt-4">
                Thành tiền:
              </h1>
              <div className="w-full h-0.5 bg-gray-300 mb-3"></div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-black font-bold mb-1 mt-1">
                  Tổng thành tiền:
                </h1>
                {action == "add" ? (
                  <h1 className="text-xl text-black font-bold mb-1 mt-1">
                    {"Ngày nhập: " +
                      new Date(
                        new Date().getFullYear(),
                        new Date().getMonth() + 1,
                        new Date().getDay()
                      )
                        .toISOString()
                        .slice(0, 10)}
                  </h1>
                ) : (
                  <span>{}</span>
                )}
              </div>
              {action == "add" ? (
                <div className="flex flex-row">
                  <Button
                    style={{
                      backgroundColor: "#0156FF",
                      borderRadius: 30,
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 40,
                    }}
                  >
                    Thêm sản phẩm
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#0156FF",
                      borderRadius: 30,
                      paddingLeft: 8,
                      paddingRight: 8,
                      height: 40,
                      marginLeft: 10,
                    }}
                  >
                    Lưu
                  </Button>
                </div>
              ) : (
                <></>
              )}
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
                  <Table.HeadCell>Mã sản phẩm</Table.HeadCell>
                  <Table.HeadCell>Tên nhà cung cấp</Table.HeadCell>
                  <Table.HeadCell>Số lượng</Table.HeadCell>
                  <Table.HeadCell>Đơn giá</Table.HeadCell>
                  <Table.HeadCell>Thành tiền</Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                </Table.Head>
                {importedProducts.map((importedProduct, index) => {
                  return (
                    <Table.Body className="divide-y bg-teal-200" key={index}>
                      <Table.Row
                        className="bg-white dark:border-gray-700 dark:bg-teal-200"
                        onClick={() => alert(index)}
                      >
                        <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1/12 text-center">
                          {index + 1}
                        </Table.Cell>
                        <Table.Cell className="w-1/6">
                          {importedProduct.productId}
                        </Table.Cell>
                        <Table.Cell className="w-1/6">
                          {importedProduct.supplierName}
                        </Table.Cell>
                        <Table.Cell className="text-right w-1/6">
                          {importedProduct.amount}
                        </Table.Cell>
                        <Table.Cell className="text-right w-1/6">
                          {importedProduct.importedPrice}
                        </Table.Cell>
                        <Table.Cell className="text-right w-1/6">
                          {importedProduct.importedPrice *
                            importedProduct.amount}
                        </Table.Cell>
                        <Table.Cell className="w-1/12 text-center">
                          <div style={{ flexDirection: "column" }}>
                            <button
                              onClick={() => alert(importedProduct.productId)}
                              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                              <Trash2 color="green" />
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  );
                })}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodReceipt;
