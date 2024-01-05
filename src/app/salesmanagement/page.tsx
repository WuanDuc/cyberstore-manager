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
import { Circle, Edit, Eye, FileText, Monitor, Trash2, X } from "react-feather";
import { HiSearch } from "react-icons/hi";

const sampleBills = [
  {
    saleBilId: "HD001",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
  {
    saleBilId: "HD002",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
  {
    saleBilId: "HD003",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
  {
    saleBilId: "HD004",
    customerName: "Nguyễn Văn A",
    staffName: "Nhân viên A",
    paymentDate: "2023-12-31",
    billPrice: 2000000,
    note: "Abc def jca fafa eeea ggga   asss",
  },
];

const sampleCustomer = [
  {
    customerId: "KH001",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
  {
    customerId: "KH002",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
  {
    customerId: "KH003",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
  {
    customerId: "KH004",
    name: "Nguyễn Văn A",
    phone: "0775555555",
    address:
      "KTX Khu A, khu phố 6, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh",
    badge: "Khách hàng thành viên",
    point: 100,
  },
];

const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

export default function SalesManagement() {
  return (
    <main className="flex max-h-screen flex-col fill-white">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-0 w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8 font-mono">
              <label className=" font-semibold text-2xl text-black p-7 pt-24">
                Quản lý mua bán
              </label>
            </div>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={customTabTheme}
            >
              <Tabs.Item active title="Quản lý đơn hàng" className="bg-red-300">
                <div style={{ height: 50 }}>
                  <div
                    className=" flex fixed right-36 pl-96 "
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
                      <FileText style={{ marginRight: 3 }} />
                      Tạo hóa đơn
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
                  <Table hoverable theme={customTableTheme}>
                    <Table.Head>
                      <Table.HeadCell>STT</Table.HeadCell>
                      <Table.HeadCell>Mã đơn hàng</Table.HeadCell>
                      <Table.HeadCell>Tên khách hàng</Table.HeadCell>
                      <Table.HeadCell>Tên nhân viên</Table.HeadCell>
                      <Table.HeadCell>Ngày thanh toán</Table.HeadCell>
                      <Table.HeadCell>Tổng tiền</Table.HeadCell>
                      <Table.HeadCell>Ghi chú</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {sampleBills.map((bill, index) => {
                      return (
                        <Table.Body className="divide-y bg-teal-200">
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-teal-200">
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-2.5 text-center">
                              {index}
                            </Table.Cell>
                            <Table.Cell className="w-1/10">
                              {bill.saleBilId}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {bill.customerName}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {bill.staffName}
                            </Table.Cell>
                            <Table.Cell>{bill.paymentDate}</Table.Cell>
                            <Table.Cell className="text-right">
                              {bill.billPrice}
                            </Table.Cell>
                            <Table.Cell className="w-1/5">
                              {bill.note}
                            </Table.Cell>
                            <Table.Cell className="w-28">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() => alert(bill.saleBilId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                                <button
                                  onClick={() => alert(bill.saleBilId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                  <Trash2 color="red" />
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
              <Tabs.Item title="Quản lý khách hàng">
                <div style={{ height: 50 }}>
                  <div
                    className="flex fixed right-5 pl-96 "
                    style={{ marginBottom: 30 }}
                  >
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderRadius: 20,
                        color: "black",
                        width: 300,
                      }}
                      id="email4"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
                  </div>
                  {/* <div className=" flex fixed right-1 pr-1">
                    <Button
                      style={{
                        borderRadius: 20,
                        backgroundColor: "#0156FF",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                      onClick={() => alert("hihi")}
                    >
                      <FileText style={{ marginRight: 3 }} />
                      Tạo hóa đơn
                    </Button>
                  </div> */}
                </div>
                <div
                  style={{
                    width: 1200,
                    alignSelf: "center",
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                >
                  <Table hoverable theme={customTableTheme}>
                    <Table.Head>
                      <Table.HeadCell>STT</Table.HeadCell>
                      <Table.HeadCell>Mã khách hàng</Table.HeadCell>
                      <Table.HeadCell>Tên khách hàng</Table.HeadCell>
                      <Table.HeadCell>Số điện thoại</Table.HeadCell>
                      <Table.HeadCell>Địa chỉ</Table.HeadCell>
                      <Table.HeadCell>Hạng thành viên</Table.HeadCell>
                      <Table.HeadCell>Điểm thành viên</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {sampleCustomer.map((customer, index) => {
                      return (
                        <Table.Body className="divide-y bg-teal-200">
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-teal-200"
                            onClick={() => alert(index)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1/16 text-center">
                              {index}
                            </Table.Cell>
                            <Table.Cell className="w-1/16">
                              {customer.customerId}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {customer.name}
                            </Table.Cell>
                            <Table.Cell className="w-1/6">
                              {customer.phone}
                            </Table.Cell>
                            <Table.Cell>{customer.address}</Table.Cell>
                            <Table.Cell className="w-1/10">
                              {customer.badge}
                            </Table.Cell>
                            <Table.Cell className="w-1/8 text-right">
                              {customer.point}
                            </Table.Cell>
                            <Table.Cell className="w-28">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() => alert(bill.saleBilId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                                <button
                                  onClick={() => alert(bill.saleBilId)}
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                  <Trash2 color="red" />
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
const customTabTheme: CustomFlowbiteTheme["tabs"] = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline:
        "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      pills:
        "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      fullWidth:
        "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
  tabpanel: "py-3",
};

const customTableTheme: CustomFlowbiteTheme["table"] = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400 seft-center",
    shadow:
      "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4",
    },
  },
  head: {
    base: "group/head text-xs uppercase text-white dark:text-white",
    cell: {
      base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-cyan-950 dark:bg-cyan-950 px-6 py-3",
    },
  },
  row: {
    base: "group/row text-black dark:text-black",
    hovered: "hover:bg-green-400 dark:hover:bg-green-400",
    striped:
      "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
  },
};
