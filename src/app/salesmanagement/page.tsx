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
import { THEME } from "@/constant/theme";
import { useRouter } from "next/navigation";

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

export default function SalesManagement() {
  const router = useRouter();

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
              theme={THEME.tabTheme}
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
                      onClick={()=>router.push('/salesmanagement/discountEventDetail')}
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
                  <Table hoverable theme={THEME.tableTheme}>
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
                        <Table.Body className="divide-y bg-teal-200" key={index}>
                          <Table.Row className="bg-white dark:border-gray-700 dark:bg-teal-200">
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-2.5 text-center">
                              {index + 1}
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
                  <Table hoverable theme={THEME.tableTheme}>
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
                        <Table.Body className="divide-y bg-teal-200" key={index}>
                          <Table.Row
                            className="bg-white dark:border-gray-700 dark:bg-teal-200"
                            onClick={() => alert(index + 1)}
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-black w-1/16 text-center">
                              {index + 1}
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
