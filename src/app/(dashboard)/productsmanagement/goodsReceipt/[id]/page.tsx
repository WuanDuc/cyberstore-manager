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
import { ProductCard } from "@/components/productCard";
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
import moment from "moment";
import api from "@/apis/Api";

const GoodReceipt = ({ params }) => {
  const [importedProducts, setImportedProducts] = useState([
    // {
    //   importedBillId: "PN001",
    //   productId: "SP001",
    //   supplierName: "Asus",
    //   importedPrice: 200000,
    //   amount: 20,
    // },
    // {
    //   importedBillId: "PN001",
    //   productId: "SP001",
    //   supplierName: "Asus",
    //   importedPrice: 200000,
    //   amount: 20,
    // },
    // {
    //   importedBillId: "PN001",
    //   productId: "SP001",
    //   supplierName: "Asus",
    //   importedPrice: 200000,
    //   amount: 20,
    // },
    // {
    //   importedBillId: "PN001",
    //   productId: "SP001",
    //   supplierName: "Asus",
    //   importedPrice: 200000,
    //   amount: 20,
    // },
  ]);
  const [goodsReceipt, setGoodsReceipt] = useState({
    goodsReceiptId: "",
    entryDate: moment().format("YYYY-MM-DD"),
    staffId: "",
    totalPrice: 0,
    importedProducts: [],
  });

  const { id } = params;

  const router = useRouter();
  const getGoodsReceipt = async () => {
    const temp = await api.getGoodsReceiptById(id);
    setImportedProducts(temp.importedProducts);
    setGoodsReceipt(temp);
  };

  useEffect(() => {
    if (id !== "add") {
      getGoodsReceipt();
    }
  }, []);

  return (
    <div className="flex max-h-screen flex-col fill-white overflow-scroll">
      <div className="z-10 fill-white max-w-5xl w-full text-sm">
        <div className="flex-col top-0 w-screen h-px-500">
          <div className="flex-col">
            <div className="flex-row pt-8">
              {id == "add" ? (
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
              <h1 className="text-xl text-black font-bold mb-2">
                Sản phẩm nhập
              </h1>
              {id == "add" ? (
                <div>
                  <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
                  <div className="flex flex-row">
                    <div className="flex flex-col w-2/5">
                      <h2 className="text-base text-black font-semibold mb-1 mt-4">
                        Tên sản phẩm <span className="text-red-700">*</span>
                      </h2>
                      <div className="flex flex-row">
                        <input
                          type="text"
                          disabled={id !== "add"}
                          className="w-full h-10 border border-gray-300 rounded px-3"
                        />
                        <Button
                          style={{
                            width: 45,
                            height: 40,
                            borderRadius: 20,
                            marginLeft: 5,
                            backgroundColor: "#0156FF",
                          }}
                          disabled={id !== "add"}
                          onClick={() =>
                            router.push("/productsmanagement/updateProduct/add")
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
                        disabled={id !== "add"}
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
                        disabled={id !== "add"}
                        className="w-full h-10 border border-gray-300 rounded px-3"
                      />
                      <h2 className="text-base text-black font-semibold mb-1 mt-4">
                        Đơn giá <span className="text-red-700">*</span>
                      </h2>
                      <input
                        type="text"
                        disabled={id !== "add"}
                        className="w-full h-10 border border-gray-300 rounded px-3"
                      />
                    </div>
                  </div>
                  <h1 className="text-xl text-black font-bold mb-1 mt-4">
                    Thành tiền:
                  </h1>
                </div>
              ) : (
                <></>
              )}
              <div className="w-full h-0.5 bg-gray-300 mb-3"></div>
              <div className="flex flex-row justify-between">
                <h1 className="text-xl text-black font-bold mb-1 mt-1">
                  {"Tổng thành tiền: " +
                    new Intl.NumberFormat("en-DE").format(
                      goodsReceipt.totalPrice
                    )}
                </h1>
                {id == "add" ? (
                  <h1 className="text-xl text-black font-bold mb-1 mt-1">
                    {"Ngày nhập: " + moment().format("YYYY-MM-DD")}
                  </h1>
                ) : (
                  <span className="text-xl text-black font-bold mb-1 mt-1">
                    {"Ngày nhập: " + goodsReceipt.entryDate}
                  </span>
                )}
              </div>
              {id == "add" ? (
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
                      borderRadius: 20,
                      width: 60,
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
                  {/* <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell> */}
                </Table.Head>
                {importedProducts?.map((importedProduct, index) => {
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
                          {new Intl.NumberFormat("en-DE").format(
                            importedProduct.importedPrice
                          )}
                        </Table.Cell>
                        <Table.Cell className="text-right w-1/6">
                          {new Intl.NumberFormat("en-DE").format(
                            importedProduct.importedPrice *
                              importedProduct.amount
                          )}
                        </Table.Cell>
                        {/* <Table.Cell className="w-1/12 text-center">
                          <div style={{ flexDirection: "column" }}>
                            <button
                              onClick={() => alert(importedProduct.productId)}
                              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                              disabled={id !== "add"}
                            >
                              <Trash2 color="green" />
                            </button>
                          </div>
                        </Table.Cell> */}
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
