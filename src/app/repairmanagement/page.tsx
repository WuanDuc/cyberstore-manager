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
import { useRouter } from "next/navigation";

const sampleProduct = {
  name: "Sample Product",
  src: "/sample.jpg",
  price: 19.99,
  brand: "Sample Brand",
  sale: 10,
};

const RepairContainerLeft = () => (
  <div className="h-300 w-2/4  p-4 ml-6 mr-6  ">
    <h1 className="text-xl text-black font-bold mb-2">
      Thông tin phiếu bảo hành
    </h1>
    <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã phiếu</h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">
      Tên khách hàng
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">
      Số điện thoại
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">Mã hóa đơn</h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">
      Ngày lập phiếu - Ngày hết hạn
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3 mt-2"
    />
  </div>
);

const RepairContainerRight = () => (
  <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 ">
    <h1 className="text-xl text-black font-bold mb-2">
      Thông tin máy bảo hành
    </h1>
    <div className="w-full h-100 bg-gray-600 mb-2"></div>
    <div className="flex">
      {/* Hình ảnh bên trái */}
      <img
        src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        alt="Product Image"
        className="w-40 h-40 rounded mr-4"
      />

      {/* Container chứa thông tin bên phải */}
      <div className="flex flex-col mt-5  ">
        <div className="mb-1">
          <h2 className="text-black font-semibold">Tên máy:</h2>
          <span className="text-black">MSI MEG Trident X 102D</span>
        </div>
        <div>
          <span className="font-semibold text-black">Giá: $3,799</span>
        </div>
      </div>
    </div>
  </div>
);

const DiscountContainerLeft = () => (
  <div className="h-300 w-2/4  p-4 ml-6 mr-6  ">
    <h1 className="text-xl text-black font-bold mb-2">
      Thông tin chương trình
    </h1>
    <div className="w-full h-0.5 bg-gray-300 mb-8"></div>
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">
      Mã chương trình
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">
      Tên chương trình
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">
      Thời gian bắt đầu
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">
      Thời gian kết thúc
    </h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">Điều kiện</h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
    <h2 className="text-lg text-black font-semibold mb-1 mt-4">Chiết khấu</h2>
    <input
      type="text"
      className="w-full h-10 border border-gray-300 rounded px-3"
    />
  </div>
);

const DiscountContainerRight = () => (
  <div className="h-1/4 w-1/4 bg-gray-300 p-4 mr-6 ">
    {/* Container chứa thông tin bên phải */}
    <div className="flex flex-col mt-5  items-center justify-center">
      <h2 className="text-xl text-black font-bold mb-2 text-center">
        Hình ảnh
      </h2>
      <img
        src="https://asset.msi.com/resize/image/global/product/product_0_20181005103112_5bb6ccf062df0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png"
        alt="Product Image"
        className="w-40 h-40 rounded mr-4"
      />
    </div>
  </div>
);
import { HiSearch } from "react-icons/hi";
import { Eye, File, Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { SHARE_FUNCTIONS } from "@/constant/function";

const repairOrders = [
  {
    repairOrderId: "PS001",
    staffId: "NV001",
    warrantyId: "BH005",
    productName: "Laptop Acer Swift 3",
    customerId: "KH001",
    receivedDate: "2023-01-01",
    scheduledDate: "2023-01-05",
    repairStatus: true,
  },
  {
    repairOrderId: "PS002",
    staffId: "NV001",
    warrantyId: "BH002",
    productName: "Laptop Acer Swift 3",
    customerId: "KH001",
    receivedDate: "2023-01-01",
    scheduledDate: "2023-01-05",
    repairStatus: false,
  },
  {
    repairOrderId: "PS003",
    staffId: "NV001",
    warrantyId: "BH004",
    productName: "Laptop Acer Swift 3",
    customerId: "KH001",
    receivedDate: "2023-01-01",
    scheduledDate: "2023-01-05",
    repairStatus: false,
  },
  {
    repairOrderId: "PS004",
    staffId: "NV001",
    warrantyId: "BH002",
    productName: "Laptop Acer Swift 3",
    customerId: "KH001",
    receivedDate: "2023-01-01",
    scheduledDate: "2023-01-05",
    repairStatus: true,
  },
];

export default function RepairManagement() {
  const [warrantyCertificates, setWarranty] = useState([
    {
      warrantyId: "BH001",
      warrantyPeriod: 12,
      billId: "HD001",
      startDate: "2023-01-12",
      status: "",
    },
    {
      warrantyId: "BH002",
      warrantyPeriod: 12,
      billId: "HD001",
      startDate: "2023-01-12",
      status: "",
    },
    {
      warrantyId: "BH003",
      warrantyPeriod: 12,
      billId: "HD001",
      startDate: "2023-01-12",
      status: "",
    },
  ]);

  useEffect(() => {
    const temp = warrantyCertificates.map((warrantyCertificate, index) => {
      const flag = SHARE_FUNCTIONS.compareWithToday(
        warrantyCertificate.startDate
      );
      let temp1 = {
        warrantyId: "",
        warrantyPeriod: 0,
        billId: "",
        startDate: "",
        status: "Còn hạn",
      };
      temp1.warrantyId = warrantyCertificate.warrantyId;
      temp1.billId = warrantyCertificate.billId;
      temp1.warrantyPeriod = warrantyCertificate.warrantyPeriod;
      temp1.startDate = warrantyCertificate.startDate;
      flag == -1 ? (temp1.status = "Hết hạn") : (temp1.status = "Còn hạn");
      return temp1;
    });
    setWarranty(temp);
  }, []);

  const router = useRouter();
  return (
    <main className="flex max-h-screen flex-col fill-white overflow-y-scroll">
      <div className="z-10 fill-white max-w-5xl w-full font-mono text-sm ">
        <div className="flex-col fixed top-0 w-screen">
          <div className="flex-col">
            <div className=" flex-row pt-8">
              <label className=" font-semibold text-2xl text-black p-7 pt-11">
                Quản lý sửa chữa máy
              </label>
            </div>
            <Tabs
              aria-label="Tabs with underline"
              style="underline"
              theme={customTabTheme}
            >
              <Tabs.Item active title="Quản lý phiếu sửa chữa">
                <div style={{ height: 50 }}>
                  <div
                    className=" flex fixed right-52 pl-96 "
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
                      Thêm phiếu sửa chữa
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
                      <Table.HeadCell>Mã phiếu sửa chữa</Table.HeadCell>
                      <Table.HeadCell>Mã nhân viên</Table.HeadCell>
                      <Table.HeadCell>Mã khách hàng</Table.HeadCell>
                      <Table.HeadCell>Tên sản phẩm</Table.HeadCell>
                      <Table.HeadCell>Ngày nhận</Table.HeadCell>
                      <Table.HeadCell>Ngày hẹn</Table.HeadCell>
                      <Table.HeadCell>Bảo hành</Table.HeadCell>
                      <Table.HeadCell>Tình trạng</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {repairOrders.map((repairOder, index) => {
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-teal-200 px-3 py-2"
                            onClick={() => alert(index)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1 text-center px-3 py-2">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2">
                              {repairOder.repairOrderId}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2">
                              {repairOder.staffId}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2">
                              {repairOder.customerId}
                            </Table.Cell>
                            <Table.Cell className="w-1/4 px-3 py-2">
                              {repairOder.productName}
                            </Table.Cell>
                            <Table.Cell className="w-28 text-right px-3 py-2">
                              {repairOder.receivedDate}
                            </Table.Cell>
                            <Table.Cell className="w-28 text-right px-3 py-2">
                              {repairOder.scheduledDate}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2">
                              {repairOder.warrantyId !== null
                                ? repairOder.warrantyId
                                  ? "Có"
                                  : "Không"
                                : ""}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2">
                              {repairOder.repairStatus !== null
                                ? repairOder.repairStatus
                                  ? "Hoàn tất sửa chữa"
                                  : "Chờ sửa chữa"
                                : ""}
                            </Table.Cell>
                            <Table.Cell className="w-24 px-3 py-2 align-center">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() =>
                                    alert(repairOder.repairOrderId)
                                  }
                                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                  style={{ width: 40 }}
                                >
                                  <Eye color="green" />
                                </button>
                                <button
                                  onClick={() =>
                                    alert(repairOder.repairOrderId)
                                  }
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
              </Tabs.Item>
              <Tabs.Item title="Quản lý phiếu bảo hành">
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
                      id="saleProductSearch"
                      type="Search"
                      rightIcon={HiSearch}
                      placeholder="Search"
                      required
                    />
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
                      <Table.HeadCell>Mã phiếu bảo hành</Table.HeadCell>
                      <Table.HeadCell>Mã hóa đơn</Table.HeadCell>
                      <Table.HeadCell>Ngày bắt đầu</Table.HeadCell>
                      <Table.HeadCell>Thời hạn bảo hành</Table.HeadCell>
                      <Table.HeadCell>Tình trạng</Table.HeadCell>
                      <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                      </Table.HeadCell>
                    </Table.Head>
                    {warrantyCertificates.map((warrantyCertificate, index) => {
                      return (
                        <Table.Body
                          className="divide-y bg-teal-200"
                          key={index}
                        >
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-teal-200"
                            onClick={() => alert(index)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1 text-center">
                              {index + 1}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2">
                              {warrantyCertificate.warrantyId}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2">
                              {warrantyCertificate.billId}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2 text-right">
                              {warrantyCertificate.startDate}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2 text-right">
                              {warrantyCertificate.warrantyPeriod + " tháng"}
                            </Table.Cell>
                            <Table.Cell className="px-3 py-2">
                              {warrantyCertificate.status
                                ? warrantyCertificate.status
                                : ""}
                            </Table.Cell>
                            <Table.Cell className="w-16">
                              <div style={{ flexDirection: "column" }}>
                                <button
                                  onClick={() =>
                                    alert(warrantyCertificate.warrantyId)
                                  }
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

const customTableTheme: CustomFlowbiteTheme["table"] = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400 self-center border-separate border border-white",
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
    base: "group/head text-s uppercase text-white dark:text-white",
    cell: {
      base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-cyan-950 dark:bg-cyan-950 px-3 py-2 text-center",
    },
  },
  row: {
    base: "group/row text-black dark:text-black",
    hovered:
      "hover:bg-indigo-950 dark:hover:bg-indigo-950 hover:text-white dark:hover:text-white",
    striped:
      "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
  },
};

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
